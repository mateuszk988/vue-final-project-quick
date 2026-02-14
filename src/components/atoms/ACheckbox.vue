<template>
  <input
    type="checkbox"
    :checked="props.isChecked"
    @change="handleChange"
    class="a-checkbox"
  />
</template>

<script setup lang="ts">
  const props = defineProps<{
    isChecked?: boolean;
  }>();

  const emit = defineEmits<{
    (e: "change", event: Event): void;
  }>();

  const handleChange = (event: Event) => {
    emit("change", event);
  };
</script>

<style scoped lang="scss">
  .a-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
