<template>
  <button
    class="a-button"
    :class="{
      'a-button--disabled': props.isDisabled || props.isLoading,
      'a-button--primary': props.type === 'primary',
      'a-button--secondary': props.type === 'secondary',
    }"
    :disabled="props.isDisabled || props.isLoading"
    @click="handleClick"
  >
    <template v-if="props.isLoading">
      <span class="a-button__loader" />
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isDisabled?: boolean;
      isLoading?: boolean;
      type?: "primary" | "secondary";
    }>(),
    {
      type: "primary",
    }
  );

  const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
  }>();

  const handleClick = (event: MouseEvent) => {
    if (props.isDisabled || props.isLoading) return;

    emit("click", event);
  };
</script>

<style scoped lang="scss">
  .a-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    color: #fff;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &--disabled {
      opacity: 0.5;
      cursor: auto;
    }

    &--primary {
      background-color: #1976d2;
    }

    &--secondary {
      background-color: #19d232;
    }

    // Next variant of buttons
    // &--outline {...}

    &__loader {
      width: 16px;
      height: 16px;
      border: 2px solid #f3f3f3;
      border-top: 2px solid #555;
      border-radius: 50%;
      animation: rotate 1s linear infinite;
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
</style>
