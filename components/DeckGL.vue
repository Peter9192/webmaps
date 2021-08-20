<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
// import * as L from 'leaflet';
import { LeafletLayer } from "deck.gl-leaflet";
import { MapView } from "@deck.gl/core";
import {
  GeoJsonLayer,
  ArcLayer,
  GridCellLayer,
  PolygonLayer,
} from "@deck.gl/layers";
export default {
  async mounted() {
    // Normal leaflet map
    const map = L.map(document.getElementById("map"), {
      center: [45, 9],
      zoom: 5,
    });
    // Normal leaflet tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Deck.gl layer
    // const AIR_PORTS =
    //   "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";
    const cpmData = await fetch('/era5_data_cutout.json').then(res => res.json())
    const deckLayer = new LeafletLayer({
      views: [new MapView({ repeat: true })],
      layers: [
        // new GeoJsonLayer({
        //   id: "airports",
        //   data: AIR_PORTS,
        //   filled: true,
        //   pointRadiusMinPixels: 2,
        //   pointRadiusScale: 2000,
        //   getPointRadius: (f) => 11 - f.properties.scalerank,
        //   getFillColor: [200, 0, 80, 180],
        // }),
        // new ArcLayer({
        //   id: "arcs",
        //   data: AIR_PORTS,
        //   dataTransform: (d) =>
        //     d.features.filter((f) => f.properties.scalerank < 4),
        //   getSourcePosition: (f) => [-0.4531566, 51.4709959],
        //   getTargetPosition: (f) => f.geometry.coordinates,
        //   getSourceColor: [0, 128, 200],
        //   getTargetColor: [200, 0, 80],
        //   getWidth: 1,
        // }),
        // new GridCellLayer({
        //   id: "grid-cell-layer",
        //   data: [
        //     { centroid: [-122.4, 37.7], value: 110 },
        //     { centroid: [-123.4, 38.7], value: 120 },
        //     { centroid: [-124.4, 39.7], value: 130 },
        //     { centroid: [-125.4, 40.7], value: 140 },
        //     { centroid: [-126.4, 41.7], value: 150 },
        //     { centroid: [-127.4, 42.7], value: 160 },
        //   ],
        //   pickable: true,
        //   extruded: true,
        //   cellSize: 2000,
        //   elevationScale: 5000,
        //   getPosition: (d) => d.centroid,
        //   getFillColor: (d) => [48, 128, d.value * 255, 255],
        //   getElevation: (d) => d.value,
        // }),
        // new PolygonLayer({
        //   id: "polygon-layer",
        //   data: [
        //     { centroid: [1, 50], value: 110 },
        //     { centroid: [2, 50], value: 120 },
        //     { centroid: [3, 50], value: 130 },
        //     { centroid: [1, 51], value: 140 },
        //     { centroid: [2, 51], value: 150 },
        //     { centroid: [3, 51], value: 160 },
        //   ],
        //   pickable: true,
        //   stroked: true,
        //   filled: true,
        //   wireframe: true,
        //   lineWidthMinPixels: 1,
        //   getPolygon: (d) => [
        //     [d.centroid[0] - 0.5, d.centroid[1] - 0.5],
        //     [d.centroid[0] + 0.5, d.centroid[1] - 0.5],
        //     [d.centroid[0] + 0.5, d.centroid[1] + 0.5],
        //     [d.centroid[0] - 0.5, d.centroid[1] + 0.5],
        //   ],
        //   getElevation: 1,
        //   getFillColor: (d) => [d.value, 140, 0],
        //   getLineColor: [80, 80, 80],
        //   getLineWidth: 1,
        // }),
        new PolygonLayer({
          id: "cpm-layer",
          data: cpmData,
        //   pickable: true,
        //   stroked: true,
          filled: true,
        //   wireframe: true,
        //   lineWidthMinPixels: 1,
          getPolygon: (d) => [
            [d.lon - 0.25, d.lat - 0.25],
            [d.lon + 0.25, d.lat - 0.25],
            [d.lon + 0.25, d.lat + 0.25],
            [d.lon - 0.25, d.lat + 0.25],
          ],
          getElevation: 1,
          getFillColor: (d) => d.color,
          getLineColor: null,
          getLineWidth: 0,
          opacity: 0.7,
        }),
      ],
    });
    map.addLayer(deckLayer);

    // // Marker
    // const featureGroup = L.featureGroup();
    // featureGroup.addLayer(L.marker([51.4709959, -0.4531566]));
    // map.addLayer(featureGroup);
  },
};
</script>

    <style>
#map {
  width: 600px;
  height: 420px;
}
</style>
