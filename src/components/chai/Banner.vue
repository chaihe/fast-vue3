<template>
  <h1 class="text-5xl mt-30 font-bold text-white leading-normal">TOPRARE <br />A New Interactive NFT Launchpad</h1>
  <div class="mt-3 font-bold text-base leading-none text-white text-opacity-30">
    PROVIDE A NOVEL WAY TO LAUNCH NFT,<br />
    INCREASE USER MOTIVATION AND CREATE MORE VALUE.
  </div>
  <button
    type="button"
    @click="itemClick"
    class="w-45 h-11 text-sm font-bold rounded-lg mt-10 mb-28 bg-gradient-to-r from-hex-FFED4E to-hex-B1FF63"
    >START</button
  >
  <div class="grid grid-cols-5 gap-5">
    <img src="../../assets/images/product/product_3.png" />
    <img src="../../assets/images/product/product_4.png" />
    <img src="../../assets/images/product/product_5.png" />
    <img src="../../assets/images/product/product_6.png" />
    <img src="../../assets/images/product/product_7.png" />
  </div>

  <div class="nft">
    <h1 class="text-5xl mt-40 font-bold text-white text-right"
      >100% <br />
      Get NFT rewards by raffle</h1
    >

    <div class="bg-white h-px my-8 transform scale-y-30"></div>
    <div class="text-white font-bold text-base text-right text-opacity-50"
      >Stay away from the uninspiring mint process. Draw your own <br />
      NFT from the pool and the only thing determines the outcome <br />
      is your luck. It will be fun and exciting!</div
    >
  </div>
  <div class="reward mt-30">
    <h1 class="text-5xl mt-45 font-bold text-white">
      The final <br />
      super rare reward</h1
    >
    <div class="bg-white h-px my-8 transform scale-y-30"></div>
    <div class="text-white font-bold text-base text-opacity-50"
      >Each pool has an ultimate super rare NFT, well-designed by <br />
      artists. Only those who clear the NFT pool can get the reward.</div
    >
  </div>

  <div class="features">
    <h1 class="text-5xl mt-56 font-bold text-white"> Features of TOPRARE</h1>
    <div class="item grid grid-cols-3 gap-0 mt-10 min-h-46 py-8 text-black font-bold">
      <div class="h-full px-8 border-r-1 border-black">
        <div class="title text-2xl"> MORE ENGAGEMENT </div>
        <div class="subtitle text-base leading-tight"
          >THE PROCESS OF GETTING <br />
          AN NFT IS INTERACTIVE</div
        >
      </div>
      <div class="h-full px-8 border-r-1 border-black">
        <div class="title text-2xl"> MORE POSSIBILITIES </div>
        <div class="subtitle text-base"
          >THE OUTCOME OF EACH <br />
          RAFFLE CAN BE <br />
          SURPRISING</div
        >
      </div>
      <div class="h-full px-8">
        <div class="title text-2xl"> MORE STRATEGIES </div>
        <div class="subtitle text-base mt-3"
          >TO GET THE FINAL <br />
          REWARDS IS A GAMING <br />
          AND NEED STRATEGY</div
        >
      </div>
    </div>
  </div>

  <div class="sub text-center">
    <h1 class="text-5xl mt-44 text-white font-bold"> Let me know</h1>
    <h3 class="text-white text-opacity-50 font-bold mt-1">If there is any update</h3>
    <div class="info mt-10 flex items-center justify-center">
      <div class="mail-input border inline-block h-11 bg-light-300 w-90 rounded-lg overflow-hidden">
        <el-input v-model="input" placeholder="YOUR EMAIL" clearable />
      </div>
      <button type="button" class="w-52 h-11 ml-6 text-sm font-bold rounded-lg bg-gradient-to-r from-hex-FFED4E to-hex-B1FF63"
        >SUBSCRIPTION</button
      >
    </div>
  </div>

  <div class="flex items-center justify-center mt-40 mb-26">
    <a href="https://twitter.com/toprareio" target="_blank">
      <img class="h-20 w-20" src="../../assets/images/community/logo1.png" />
    </a>
    <a class="ml-5" href="https://discord.gg/kvhdhjh8ND" target="_blank">
      <img class="h-20 w-20" src="../../assets/images/community/logo2.png" />
    </a>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const input = ref('');

  const itemClick = (msg) => {
    console.log(msg);
    ElMessage('MSG -- ' + msg);
  };
</script>

<style lang="less" scoped>
  .features {
    .item {
      background-color: #fdee4f;
    }
  }

  .info /deep/ .el-input__inner {
    height: 42px;
    color: white;
    font-weight: 700;
  }

  .info /deep/ .el-input__wrapper {
    background-color: black;
  }
</style>
