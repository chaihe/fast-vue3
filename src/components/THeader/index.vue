<template>
  <header
    @click="ethClick"
    class="nav-header antialiased flex justify-center items-center h-12 bg-white text-slate-500 dark:text-slate-400 dark:bg-hex-1E1E1E"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="logo w-18 h-4"><img src="../../assets/images/header/logo.png" /> </div>
      <div class="nav-links text-sm">
        {{ ethAccount }}
        <!-- <a href="javascript:void()">ITEM</a>
        <a href="javascript:void()">TOPRARE</a>
        <a href="javascript:void()" @click="ethClick">LOGIN</a> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const ethAccount = ref('');
  const ethClick = async () => {
    const accounts = await globalThis.ethereum.request({ method: 'eth_requestAccounts' });
    ethAccount.value = accounts[0];
  };
</script>

<style lang="less" scoped>
  .nav-header {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 0px rgba(255, 255, 255, 0.1);
  }

  .nav-links a {
    margin-left: 20px;
  }
</style>
