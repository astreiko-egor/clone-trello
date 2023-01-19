<template>
  <div class="header-menu-dropdown">
    <app-container>
      <div class="header-menu-dropdown__content">
        <div class="header-menu-dropdown__left">
          <h3 class="header-menu-dropdown__main-title"></h3>
          <the-header-menu-dropdown-nav/>
        </div>
        <div class="header-menu-dropdown__right">
          <h3 class="header-menu-dropdown__secondary-title"></h3>
        </div>
      </div>
    </app-container>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'
import {IHeaderMenuDropdown} from '@/types/interfaceHeaderMenu';

const AppContainer = defineAsyncComponent(() => import('@/components/AppContainer/AppContainer.vue'))
const TheHeaderMenuDropdownNav = defineAsyncComponent(() => import("@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdownNav/TheHeaderMenuDropdownNav.vue"));

withDefaults(defineProps<IHeaderMenuDropdown>(), {})

</script>
