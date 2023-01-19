<template>
  <div class="header-menu-dropdown-nav">
    <div class="header-menu-dropdown-nav__list">
      <the-header-menu-dropdown-item v-for="(item, index) in primaryNavLinks" :key="index" v-bind="item"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'
import {IHeaderMenuDropdownNavLink} from '@/types/interfaceHeaderMenu'

defineProps<{
  primaryNavLinks: IHeaderMenuDropdownNavLink[];
}>()

const TheHeaderMenuDropdownItem = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdownNav/TheHeaderMenuDropdownNavItem/TheHeaderMenuDropdownNavItem.vue'))
</script>

<style lang="scss" scoped>
.header-menu-dropdown-nav {
  overflow: hidden;
}

.header-menu-dropdown-nav__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: -16px;
}
</style>