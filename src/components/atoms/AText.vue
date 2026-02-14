<template>
  <component :is="props.tag">
    {{ props.text }}
  </component>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      text: string;
      tag?: string;
    }>(),
    {
      tag: "span",
    }
  );
</script>
