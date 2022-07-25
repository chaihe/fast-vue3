<template>
  <div class="out-container bg-hex-000000">
    <THeader />
    <div class="container mx-auto px-4">
      <Banner />
      <!-- <Product />
      <Info /> -->
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import THeader from '/@/components/THeader/index.vue';
  import Banner from '/@/components/Chai/Banner.vue';
  // import Info from '/@/components/Chai/Info.vue';
  // import Product from '/@/components/Chai/Product.vue';
  import Footer from '/@/components/Footer/index.vue';

  onMounted(() => {
    console.log('onMounted');
  });
</script>

<style lang="less" scoped>
  .container {
    min-width: 648px;
  }
</style>
