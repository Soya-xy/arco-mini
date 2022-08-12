<template>
  <div class="flex menu" pt="3" mb-5>
    <router-link cursor="pointer" to="/test">
      <div class="title">
        发送
      </div>
      <div text="center" py="8">
        <h1>事件发送</h1>
        <div pb="12">
          Event sending
        </div>
      </div>
    </router-link>
    <router-link cursor="pointer" to="/emergency">
      <div class="title">
        上报
      </div>
      <div text="center" py="8">
        <h1>事件上报</h1>
        <div pb="12">
          Event reporting
        </div>
      </div>
    </router-link>
    <router-link cursor="pointer" to="/reportingRecords">
      <div class="title">
        记录
      </div>
      <div text="center" py="8">
        <h1>事件记录</h1>
        <div pb="12">
          Event record
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="less">
.menu {
  >a {
    width: 15%;
    @apply border border-[#F0F3FA] ml-5 indent-md;

    .title {
      @apply py-4 text-[#fff];
      background: linear-gradient(303deg, #97abff, #123597);
    }
  }
}
</style>
