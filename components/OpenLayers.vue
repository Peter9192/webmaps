<template>
  <div id="map" class="map border-4 border-black"></div>
</template>

<script>
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import { GeoJSON } from "ol/format";
import ImageLayer from 'ol/layer/Image';
import ImageSource from 'ol/source/Image';

export default {
  mounted() {
    new Map({
      target: "map",
      layers: [
        // new TileWMS({ url: "https://ahocevar.com/geoserver/wms", params: { LAYERS: 'ne:NE1_HR_LC_SR_W_DR', TILES: true } }),
        new TileLayer({ source: new OSM() }),
        // new TileLayer({ source: new XYZ({url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),
        new TileLayer({ source: new XYZ({ url: "/localTiles/{z}/{x}/{y}.png" }), opacity: 0.7 }),
        new VectorLayer({ source: new VectorSource({ url: '/IPCC-WGI-reference-regions-v4.geojson', format: new GeoJSON() }) }),
        // new ImageLayer({ source: new ImageSource({ opacity: 0.8, url: '/localTiles/0/0/0.png', imageExtent: [-600000., 5000000., 1000000., 7000000.] }) })
      ],
      view: new View({
        center: fromLonLat([10, 52]),
        zoom: 4,
      }),
    });
  },
};
</script>

<style>
.map {
  width: 800px;
  height: 600px;
}
</style>
