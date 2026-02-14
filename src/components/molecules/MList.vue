<template>
  <ul class="m-list">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
  .m-list {
    padding: 0;
    margin: 0;
    height: 300px;
    overflow-y: scroll;
  }
</style>
