<template>
  <el-carousel class="rounded-lg mt-4" height="280px" :interval="3000">
    <el-carousel-item
      class="cursor-pointer"
      v-for="item in ['MoonBirds -Special Version 1', 'MoonBirds -Special Version 2', 'MoonBirds -Special Version 3']"
      @click="itemClick(item)"
      :key="item"
    >
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
  const itemClick = (msg) => {
    console.log(msg);
    ElMessage('MSG -- ' + msg);
  };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
