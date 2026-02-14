<template>
  <MSection title="Filter by Color">
    <div class="m-color-filer">
      <div
        v-for="color in props.availableColors"
        :key="color"
        class="m-color-filter__item"
      >
        <ACheckbox
          :is-checked="props.selectedColors.includes(color)"
          @change="handleColorChange(color)"
        />
        <AColorDot
          class="m-color-filter__dot"
          :color
        />
        <AText :text="capitalize(color)" />
      </div>
    </div>
  </MSection>
</template>

<script setup lang="ts">
  import { capitalize } from "vue";
  import ACheckbox from "@atoms/ACheckbox.vue";
  import AColorDot from "@atoms/AColorDot.vue";
  import AText from "@atoms/AText.vue";
  import MSection from "@molecules/MSection.vue";

  interface MColorFilterProps {
    availableColors: string[];
    selectedColors: string[];
  }

  const props = defineProps<MColorFilterProps>();

  const emit = defineEmits<{
    (e: "change-color", color: string, action: "added" | "removed"): void;
  }>();

  const handleColorChange = (color: string) => {
    const actionType = props.selectedColors.includes(color) ? "removed" : "added";
    emit("change-color", color, actionType);
  };
</script>

<style scoped lang="scss">
  .m-color-filter {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    &__dot {
      margin: 4px 8px;
    }
  }
</style>
