<template>
  <footer class="footer antialiased bg-white Male text-sm text-slate-500 dark:text-slate-400 dark:bg-hex-1E1E1E">
    <div class="container mx-auto px-4">
      <div class="links mb-5">
        <!-- <a href="javascript:void()">MoonBirds</a>
        <a href="javascript:void()">Special</a>
        <a href="javascript:void()">Version</a>
        <a href="javascript:void()">ITEM</a> -->
      </div>
      <span class="text-white text-sm">© 2022 TOPRARE.IO</span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  .footer {
    display: flex;
    // align-items: center;
    justify-content: center;
    padding-top: 30px;
    height: 150px;
    color: var(--color-text-2);
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px -2px 0px rgba(255, 255, 255, 0.1);
  }

  .links a {
    color: white;
    margin-left: 40px;
  }
</style>
