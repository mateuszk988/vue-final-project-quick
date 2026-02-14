<template>
  <input
    :type="props.type"
    :disabled="props.isDisabled"
    class="a-input"
    :class="{
      'a-input--disabled': props.isDisabled,
      [`a-input--${props.type}`]: props.type !== 'text',
    }"
  />
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      type?: "text" | "password" | "email" | "number";
      isDisabled?: boolean;
    }>(),
    {
      type: "text",
      isDisabled: false,
    }
  );
</script>

<style scoped lang="scss">
  .a-input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;

    &--disabled {
      background-color: #f5f5f5;
      cursor: auto;
    }

    // next variants...
    //   &--email {
    //     ...
    //   }
  }
</style>
