<template>
  <div
    class="a-color-dot"
    :class="`a-color-dot--${props.size}`"
    :style="{ backgroundColor: props.color }"
  />
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      color: string;
      size?: "small" | "medium" | "large";
    }>(),
    {
      size: "medium",
    }
  );
</script>
<style scoped lang="scss">
  $a-color-dot-sizes: (
    small: 10px,
    medium: 15px,
    large: 20px,
  );

  .a-color-dot {
    border-radius: 50%;
    display: inline-block;

    @each $size, $value in $a-color-dot-sizes {
      &--#{$size} {
        width: $value;
        height: $value;
      }
    }

    // równoważny zapis
    // &--small {
    //   width: 10px;
    //   height: 10px;
    // }

    // &--medium {
    //   width: 15px;
    //   height: 15px;
    // }

    // &--large {
    //   width: 20px;
    //   height: 20px;
    // }
  }
</style>
