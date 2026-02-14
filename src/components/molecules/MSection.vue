<template>
  <div class="m-section">
    <AText
      tag="h5"
      :text="props.title"
      class="m-section__title"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
  import AText from "@atoms/AText.vue";

  const props = defineProps<{
    title: string;
  }>();
</script>

<style scoped lang="scss">
  .m-section {
    margin-bottom: 20px;

    &__title {
      margin-bottom: 10px;
      text-align: center;
    }
  }
</style>
