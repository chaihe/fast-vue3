<script setup lang="ts">
  import { onMounted } from 'vue';
  import Banner from '/@/components/chai/Banner.vue';
  import Info from '/@/components/chai/Info.vue';
  import Product from '/@/components/chai/Product.vue';

  onMounted(() => {
    console.log('onMounted');
  });
</script>

<template>
  <div class="container mx-auto px-4">
    <Banner />
    <Product />
    <Info />
  </div>
</template>

<style lang="less" scoped>
  .container {
    min-width: 648px;
  }
</style>
