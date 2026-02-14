<template>
  <img
    class="a-icon"
    :style="iconStyles"
    :src="props.icon"
    :alt="props.alt"
    width="100%"
    height="100%"
  />
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const props = withDefaults(
    defineProps<{
      icon: string;
      alt: string;
      size?: number | string;
    }>(),
    {
      size: 24,
    }
  );

  const iconSize = computed(() =>
    typeof props.size === "number" ? `${props.size}px` : props.size
  );

  const iconStyles = computed(() => ({
    width: iconSize.value,
    height: iconSize.value,
  }));
</script>
