<template>
  <div class="app">
    <the-header class="app__header" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const TheHeader = defineAsyncComponent(() => import('@/components/TheHeader/TheHeader.vue'))
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>