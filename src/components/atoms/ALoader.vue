<template>
  <div class="loader" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  $loaderColor: #1976d2;

  .loader {
    font-size: 10px;
    margin: 50px auto;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background: linear-gradient(to right, $loaderColor 10%, rgba(128, 0, 255, 0) 42%);
    position: relative;
    animation: rotate 1.5s infinite linear;

    &:after {
      content: "";
      background: #fff;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
</style>
