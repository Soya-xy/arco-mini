<script  setup>
const props = defineProps({
  title: String,
})
</script>

<!-- eslint-disable vue/valid-v-for -->
<template>
  <div w="full" ml="10">
    <div p="4" class="tit flex">
      <img v-if="title === '执行记录'" w-4 h-4 mr-3 src="../assets/images/records.png" alt="">
      <img v-else w-4 h-4 mr-3 src="../assets/images/ups.png" alt="">
      <span>{{ title }}</span>
    </div>
    <a-list>
      <a-list-item v-for=" item in [1, 2, 3]">
        <div class="flex">
          <img v-if="title === '执行记录'" w-8 h-8 mr-3 src="../assets/images/record.png" alt="">
          <img v-else w-8 h-8 mr-3 src="../assets/images/up.png" alt="">
          <span mt-1>Bytedance Technology Co., Ltd{{ item }}</span>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<style>
.arco-list-bordered{
  border: 0;
}
.tit{
  @apply bg-[#f4f6fa];
}
</style>
