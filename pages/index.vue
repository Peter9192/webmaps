<template>
  <div class="h-screen p-10 flex place-items-center gap-4">
    <div class="w-screen flex flex-col place-items-center gap-4">
      <h2 class="m-4 text-4xl">Plotting gridded data on a map</h2>
      <p>
        Leaflet map with background tiles from openstreetmap, custom overlay
        tiles, AR6 reference regions converted to geojson, and an square polygon
        drawn over the North Sea.
      </p>
      <Leaflet class="m-4" />
      <p>
        See <a href="/hvplot_image.html">here</a> for export for hvplot and
        <NuxtLink to="/deckgl">here</NuxtLink> for a version rendered with
        deck.gl.
      </p>
      <p>
        <a href="https://github.com/Peter9192/webmaps">Source code on GH.</a>
      </p>
      <p>
        Contains modified Copernicus Climate Change Service information [2021].
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
a {
  font-style: italic;
  color: blue;
}
</style>
