<template>
  <li class="m-list-item">
    <div class="m-list-item__segment m-list-item__segment--label">
      <template v-if="props.shouldShowCheckbox">
        <ACheckbox
          :is-checked="props.isCompleted"
          @change="handleChangeCompleted"
        />
      </template>
      <AText
        class="m-list-item__text"
        :class="{ 'm-list-item__text--completed': props.isCompleted }"
        :text="props.text"
      />
    </div>
    <div class="m-list-item__segment">
      <template v-if="props.availableItems?.length">
        <ASelect
          :value="props.selectedItem"
          :options="itemOptions"
          @change="handleChangeItem"
        />
      </template>
      <template v-if="props.shouldShowActionButton">
        TODO Tutaj bedzie molekula MIconButton
      </template>
    </div>
  </li>
</template>

<script setup lang="ts">
  import { capitalize, computed } from "vue";
  import ACheckbox from "@atoms/ACheckbox.vue";
  import AText from "@atoms/AText.vue";
  import ASelect from "@atoms/ASelect.vue";

  const props = withDefaults(
    defineProps<{
      text: string;
      availableItems?: string[];
      isCompleted?: boolean;
      selectedItem?: string;
      shouldShowCheckbox?: boolean;
      shouldShowActionButton?: boolean;
      icon?: string;
    }>(),
    {
      selectedItem: "",
      icon: "",
    }
  );

  const emit = defineEmits<{
    (e: "change-completed", event: Event): void;
    (e: "change-item", event: Event): void;
    (e: "delete"): void;
  }>();

  const itemOptions = computed(() => [
    { value: "", label: "" },
    ...(props.availableItems ?? []).map((item) => ({
      value: item,
      label: capitalize(item),
    })),
  ]);

  const handleChangeCompleted = (event: Event) => {
    emit("change-completed", event);
  };

  const handleChangeItem = (event: Event) => {
    emit("change-item", event);
  };

  // const handleDelete = () => {
  //   emit("delete");
  // };
</script>
<style scoped lang="scss">
  .m-list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f9f9;
    }

    &__segment {
      display: flex;
      align-items: center;

      &--label {
        flex: 1;
      }
    }

    &__text {
      font-size: 1rem;
      color: #4d4d4d;

      &--completed {
        color: #d9d9d9;
        text-decoration: line-through;
      }
    }

    &__select {
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
</style>
