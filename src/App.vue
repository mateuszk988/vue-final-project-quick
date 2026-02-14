<template>
  <MColorFilter
    :available-colors="['red', 'orange', 'blue', 'black']"
    :selected-colors="['red', 'blue']"
  />
</template>

<script setup lang="ts">
  import MColorFilter from "./components/molecules/MColorFilter.vue";
</script>
