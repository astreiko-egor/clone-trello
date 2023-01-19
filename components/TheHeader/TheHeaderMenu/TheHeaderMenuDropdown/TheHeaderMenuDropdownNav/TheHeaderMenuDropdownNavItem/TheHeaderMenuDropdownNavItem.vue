<template>
  <div class="header-menu-dropdown-nav-item">
    <div class="header-menu-dropdown-nav-item__content">
      <div class="header-menu-dropdown-nav-item__top">
        <div v-if="iconName" class="header-menu-dropdown-nav-item__wrapper-icon">
          <app-svg-sprite class="header-menu-dropdown-nav-item__icon" :icon-name="iconName"/>
        </div>
        <span v-if="title" class="header-menu-dropdown-nav-item__title">{{ title }}</span>
      </div>
      <p v-if="description" class="header-menu-dropdown-nav-item__description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'

withDefaults(defineProps<{
  // Название иконки
  iconName?: string | null;
  // Заголовок
  title?: string | null;
  // Описание
  description?: string | null;
}>(), {
  iconName: null,
  title: null,
  description: null
})

const AppSvgSprite = defineAsyncComponent(() => import('@/components/AppSvgSprite/AppSvgSprite.vue'))
</script>