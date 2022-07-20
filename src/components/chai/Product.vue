<template>
  <div class="flex flex-row mt-3 space-x-4 font-mono text-white text-lg font-bold h-32">
    <div
      class="basis-1/2 cursor-pointer border rounded-lg shadow-lg flex items-center justify-center bg-emerald-500 my-2"
      @click="itemClick('QUEST')"
    >
      QUEST
    </div>
    <div
      class="basis-1/2 cursor-pointer border rounded-lg shadow-lg flex justify-center items-center bg-emerald-500 my-2"
      @click="itemClick('INFO')"
    >
      INFO
    </div>
  </div>

  <div class="relative rounded-xl overflow-auto">
    <div class="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg">
      <div v-for="site in 4" :key="site" class="p-4 rounded-lg shadow-lg bg-gray-700">
        <div class="relative rounded-xl overflow-auto p-1">
          <div class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg">
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">05</div>
            <div class="p-4 rounded-lg shadow-lg bg-violet-500">06</div>
          </div>
          <div class="product_info static bg-gray-700 text-left mt-3">
            <div class="product_tile">MoonBirds -Special Version {{ site }}</div>
            <div class="text-teal-500 product_subtitle"> 20 Rare | 100 in Total </div>
            <div class="product_price">20.0 RMB</div>
            <button class="absolute bottom-1 right-2 rounded-lg p-1 bg-indigo-500" @click="itemClick('Get Rare')"> Get Rare </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const itemClick = (msg) => {
    console.log(msg);
    ElMessage('MSG -- ' + msg);
  };
</script>

<style scoped></style>
