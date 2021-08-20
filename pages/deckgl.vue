<template>
  <div class="h-screen p-10 flex place-items-center gap-4">
    <div class="w-screen flex flex-col place-items-center gap-4">
      <h1 class="text-4xl">deck.gl map</h1>
      <p>
        Background tiles from openstreetmap, overlaid with ERA5 data as polygon
        layer.
      </p>
      <DeckGL />
    </div>
  </div>
</template>
