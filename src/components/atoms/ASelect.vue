<template>
  <select
    :value="props.value"
    @change="handleChange"
    class="a-select"
  >
    <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
  interface Option {
    value: string | number;
    label: string;
  }

  const props = defineProps<{
    value: string | number;
    options: Option[];
  }>();

  const emit = defineEmits<{
    (e: "change", event: Event): void;
  }>();

  const handleChange = (event: Event) => {
    emit("change", event);
  };
</script>

<style scoped lang="scss">
  .a-select {
    width: auto;
    padding: 6px 8px;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 80px;
  }
</style>
