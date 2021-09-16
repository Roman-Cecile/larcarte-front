import React, { Component } from "react";
// Map
import { Map, View, Feature } from "ol";
// Layers
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
// Sources
import { XYZ, Vector as VectorSource, OSM } from "ol/source";

// Projection
import { transform, fromLonLat } from "ol/proj";

// BoxSelection
import { defaults as interactionDefaults } from "ol/interaction";

// Control
import { defaults as controlDefaults } from "ol/control";

// Geom
import Point from "ol/geom/Point";

// Style
import { Icon, Style } from "ol/style";
import localisationIcon from "../../images/localisation.png";

// Axios
import axios from "axios";
import { Snackbar } from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";

export default class index extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.loader === this.props.loader;
  }
  componentDidMount() {
    const { coords, restaurantName, isEditable, fromMenu } = this.props;
    let pointGeom;
    const restaurantLayer = new VectorLayer();
    const vectorSource = new VectorSource();
    restaurantLayer.setSource(vectorSource);

    // Transform restaurant coords from WGS-84 to pseudo mercator
    const transformCoords = transform(
      [coords.x, coords.y],
      "EPSG:4326",
      "EPSG:3857"
    );

    // .......If map is from Questions.js.......
    if (!isEditable && !fromMenu) {
      // Create point from user click on map
      pointGeom = new Feature({
        geometry: new Point(transformCoords),
        name: restaurantName,
      });

      // Set point style
      const iconStyle = new Style({
        image: new Icon({
          anchor: [150, 250],
          anchorXUnits: "pixels",
          anchorYUnits: "pixels",
          src: localisationIcon,
          scale: 0.2,
        }),
      });

      pointGeom.setStyle(iconStyle);

      // Add feature in source
      vectorSource.addFeature(pointGeom);
    }

    if (fromMenu) {
      restaurantLayer.set("name", "mainMap");
    } else {
      restaurantLayer.set("name", restaurantName);
    }

    // BUILD MAP
    const map = new Map({
      target: "map",
      interactions: interactionDefaults({
        pinchRotate: false,
        shiftDragZoom: false,
        keyboard: false,
        doubleClickZoom: false,
        altShiftDragRotate: false,
      }),

      controls: controlDefaults({
        zoom: false,
        collapsible: false,
        attribution: false,
        rotate: false,
      }),

      layers: [
        new TileLayer({
          source: new OSM(),
          opacity: 0.9,
        }),
        new TileLayer({
          source: new XYZ({
            // Google Satellite (change lyrs=s to "y" for Hybrid)
            url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
            crossOrigin: "Anonymous",
          }),
          opacity: 0.7,
        }),
      ],
    });

    const view = new View({
      center: fromLonLat([coords.x, coords.y]),
      zoom: isEditable ? 12 : fromMenu ? 6 : 18,
      minZoom: isEditable ? 12 : fromMenu ? 1 : 17,
      maxZoom: 20,
      extent: fromMenu && [
        -215375.22466466113, 4835516.266493395, 701869.1147574527,
        6821656.009455413,
      ],
    });
    map.addLayer(restaurantLayer);
    map.setView(view);

    this.map = map;
    this.transformCoords = transformCoords;
  }
  render() {
    window.scrollTo(0, 0);
    const openLayerMap = this;

    const handleChange = (data) => {
      openLayerMap.props.setChoices((prevState) => ({
        ...prevState,
        id: data.features[0].properties.id,
        adresse: data.features[0].properties.name,
      }));
      openLayerMap.props.toggleLoader();
    };

    if (openLayerMap.map && openLayerMap.props.isEditable) {
      openLayerMap.map.once("singleclick", (event) => {
        openLayerMap.props.toggleLoader();
        const transformCoords = transform(
          openLayerMap.map.getCoordinateFromPixel(event.pixel),
          "EPSG:3857",
          "EPSG:4326"
        );

        axios // GET API call
          .get(
            `https://api-adresse.data.gouv.fr/reverse/?lon=${transformCoords[0]}&lat=${transformCoords[1]}&limit=1`,
            {
              withCredentials: false,
            }
          )

          .then(({ data }) => {
            handleChange(data);
          })
          .catch((err) => {
            console.trace(err);
          });
      });
    }

    if (!this.props.fromMenu) {
      setTimeout(function () {
        openLayerMap.map.updateSize();
      }, 200);
    }

    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.props.fromMenu}
          message="non">
          <Alert severity="info">Bientôt disponible !</Alert>
        </Snackbar>
        <div
          id="map"
          style={{
            height: this.props.fromMenu ? "100vh" : 400,
            with: "100%",
          }}></div>
      </>
    );
  }
}
