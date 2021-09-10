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

export default class index extends Component {
  componentDidMount() {
    // Transform restaurant coords from WGS-84 to pseudo mercator
    const transformCoords = transform(
      [this.props.coords.x, this.props.coords.y],
      "EPSG:4326",
      "EPSG:3857"
    );

    // Create point
    const pointGeom = new Feature({
      geometry: new Point(transformCoords),
      name: this.props.restaurantName,
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
    const vectorSource = new VectorSource({
      features: [pointGeom],
    });

    // Create layer
    const showRestaurant = new VectorLayer({
      name: this.props.restaurantName,
      source: vectorSource,
    });

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
        showRestaurant,
      ],

      view: new View({
        center: fromLonLat([this.props.coords.x, this.props.coords.y]),
        zoom: 18,
        minZoom: 17,
        maxZoom: 20,
      }),
    });

    this.map = map;
  }
  render() {
    const { classes } = this.props;

    const openLauerMap = this;
    setTimeout(function () {
      openLauerMap.map.updateSize();
    }, 200);
    return (
      <>
        <div id="map" className={classes.map}></div>
      </>
    );
  }
}
