<template>
  <div class="header-menu-dropdown-nav">
    <the-header-menu-dropdown-item/>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'

const TheHeaderMenuDropdownItem = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdownNav/TheHeaderMenuDropdownNavItem/TheHeaderMenuDropdownNavItem.vue'))
</script>