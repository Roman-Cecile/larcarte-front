import React, { Component } from "react";
// Map
import { Map, View, Feature } from "ol";
// Layers
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
// Sources
import { XYZ, Vector as VectorSource, OSM } from "ol/source";

import { transform, fromLonLat } from "ol/proj";

// BoxSelection
import { defaults as interactionDefaults } from "ol/interaction";

import { defaults as controlDefaults } from "ol/control";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import localisationIcon from "../../images/localisation.png";
import axios from "axios";

export default class index extends Component {
  componentDidMount() {
    const { coords, restaurantName, isEditable } = this.props;
    let pointGeom;
    let vectorSource;
    let restaurantLayer;

    // Transform restaurant coords from WGS-84 to pseudo mercator
    const transformCoords = transform(
      [coords.x, coords.y],
      "EPSG:4326",
      "EPSG:3857"
    );
    if (!isEditable) {
      // Create point
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

      // Create source and add feature
      vectorSource = new VectorSource({
        features: [pointGeom],
      });

      // Create layer
      restaurantLayer = new VectorLayer({
        name: restaurantName,
        source: vectorSource,
      });
    } else {
      vectorSource = new VectorSource();

      // Create layer
      restaurantLayer = new VectorLayer({
        name: restaurantName,
        source: vectorSource,
      });
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
      zoom: isEditable ? 12 : 18,
      minZoom: isEditable ? 12 : 17,
      maxZoom: 20,
    });
    map.addLayer(restaurantLayer);
    map.setView(view);

    this.map = map;
    this.transformCoords = transformCoords;
  }
  render() {
    const openLayerMap = this;

    const handleChange = (data) => {
      openLayerMap.props.setChoices((prevState) => ({
        ...prevState,
        id: data.features[0].properties.id,
        adresse: data.features[0].properties.name,
      }));
    };

    if (openLayerMap.map && openLayerMap.props.isEditable) {
      openLayerMap.map.once("singleclick", (event) => {
        console.log("data");
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

    setTimeout(function () {
      openLayerMap.map.updateSize();
    }, 200);

    return (
      <>
        <div id="map" style={{ height: 400, with: "100%" }}></div>
      </>
    );
  }
}
