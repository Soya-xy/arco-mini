<script setup>
const theme = localStorage.getItem('theme') || '#eeeef3'

if (theme)
  document.body.setAttribute('arco-theme', theme)
</script>

<template>
  <router-view />
</template>
