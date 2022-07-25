<template>
  <div class="containerr bg-hex-000000 h-300">
    <div class="cc"></div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('onMounted');
  });
</script>

<style lang="less" scoped>
  .containerr {
    position: relative;
  }

  .cc {
    position: absolute;
    width: 519.6px;
    height: 592.86px;
    left: 870.74px;
    top: 102.78px;
    filter: blur(60px);
    transform: rotate(-8.06deg);
    background-color: #441d52;
    background-image: linear-gradient(150deg, #441d52 0%, #ff0c0c 32%, #ffed4e 66%, #ffffff 115%);
  }
</style>
