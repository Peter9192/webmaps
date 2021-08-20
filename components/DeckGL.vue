<template>
  <div id="map"></div>
</template>

<script>
import { LeafletLayer } from "deck.gl-leaflet";
import { MapView } from "@deck.gl/core";
import { PolygonLayer } from "@deck.gl/layers";
export default {
  async mounted() {
    // Load the data
    const era5Data = await fetch("/era5_data_cutout.json").then((res) =>
      res.json()
    );

    // Normal leaflet map
    const map = L.map(document.getElementById("map"), {
      center: [50, 9],
      zoom: 3,
    });

    // Normal leaflet tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Deck.gl layer
    const deckLayer = new LeafletLayer({
      views: [new MapView({ repeat: true })],
      layers: [
        new PolygonLayer({
          id: "cpm-layer",
          data: era5Data,
          filled: true,

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
  },
};
</script>

    <style>
#map {
  width: 600px;
  height: 420px;
}
</style>
