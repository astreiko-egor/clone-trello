<template>
  <NuxtLink v-if="to" :to="to" class="header-menu-dropdown-nav-item">
    <div class="header-menu-dropdown-nav-item__content">
      <div class="header-menu-dropdown-nav-item__top">
        <div v-if="iconName" class="header-menu-dropdown-nav-item__wrapper-icon">
          <app-svg-sprite class="header-menu-dropdown-nav-item__icon" :icon-name="iconName"/>
        </div>
        <span v-if="title" class="header-menu-dropdown-nav-item__title">{{ title }}</span>
      </div>
      <p v-if="description" class="header-menu-dropdown-nav-item__description">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'
import {IHeaderMenuDropdownNavLink} from '@/types/interfaceHeaderMenu'
withDefaults(defineProps<IHeaderMenuDropdownNavLink>(), {
  to: undefined,
  iconName: null,
  title: null,
  description: null
})

const AppSvgSprite = defineAsyncComponent(() => import('@/components/AppSvgSprite/AppSvgSprite.vue'))
</script>

<style lang="scss" scoped>
.header-menu-dropdown-nav-item {
  text-decoration: none;
}

.header-menu-dropdown-nav-item__content {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.header-menu-dropdown-nav-item__top {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.header-menu-dropdown-nav-item__wrapper-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 12px;
}

.header-menu-dropdown-nav-item__title {
  color: rgb(23, 43, 77);
  font-size: 16px;
  line-height: 24px;
}

.header-menu-dropdown-nav-item__description {
  color: rgb(80, 95, 121);
  font-size: 12px;
  line-height: 16px;
}
</style>