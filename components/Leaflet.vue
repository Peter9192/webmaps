<template>
  <div id="mapid"></div>
</template>

<script>
export default {
    async mounted (){

      // Load some shapes
      const ar6Shapes = await fetch('/IPCC-WGI-reference-regions-v4.geojson').then(res => res.json())

      // Create some interesting layers
      const background = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
      const tiles = L.tileLayer('/era5_tiles/{z}/{x}/{y}.png', {attribution: 'ERA5 temperature data'}).setOpacity(0.9)
      const shapes = L.geoJSON(ar6Shapes, {onEachFeature: (feature, layer) => { layer.bindTooltip(feature.properties.Name) }})
      const image = L.imageOverlay('/era5_image.png', [[-85, -180], [85, 180]], {attribution: 'ERA5 temperature data'}).setOpacity(0.7)
      const marker = L.marker([51.5, -0.09]).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
      const rectangle = L.rectangle([[50, 0], [55, 5]], {color: "#ffffff", weight: 1}) // ymin xmin ymax xmax

      // Create the map
      var map = L.map('mapid', {
        center: [52, 10],
        zoom: 2,
        layers: [background, image]
      })

      L.control.layers(
        {"Background": background},
        {"Tiles": tiles,
         "Shapes": shapes,
         "Image": image,
         "Marker": marker,
         "Rectangle": rectangle},
      ).addTo(map);
    }
}
</script>

<style scoped>
#mapid {
  width: 600px;
  height: 420px;
}
</style>
