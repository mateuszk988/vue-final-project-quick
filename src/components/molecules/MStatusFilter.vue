<template>
  <MSection title="Filter by Status">
    <div class="m-status-filter">
      <div
        v-for="option in props.statusOptions"
        :key="option.value"
        class="m-status-filter__item"
      >
        <AButton
          :isDisabled="option.value === props.selectedStatus"
          class="m-status-filter__button"
          @click="handleStatusChange(option.value)"
        >
          {{ option.label }}
        </AButton>
      </div>
    </div>
  </MSection>
</template>

<script setup lang="ts">
  import AButton from "@atoms/AButton.vue";
  import MSection from "@molecules/MSection.vue";

  interface StatusOption {
    value: string;
    label: string;
  }

  const props = defineProps<{
    statusOptions: StatusOption[];
    selectedStatus: string;
  }>();

  const emit = defineEmits<{
    (e: "status-change", status: string): void;
  }>();

  const handleStatusChange = (status: string) => {
    emit("status-change", status);
  };
</script>

<style scoped lang="scss">
  .m-status-filter {
    display: flex;
    flex-direction: column;

    &__item {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__button {
      width: 100%;
    }
  }
</style>
