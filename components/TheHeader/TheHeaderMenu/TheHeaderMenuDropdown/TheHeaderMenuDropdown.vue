<template>
  <div class="header-menu-dropdown" :class="[dynamicShowClass]">
    <div class="header-menu-dropdown__bg">
      <span class="header-menu-dropdown__bg-left"></span>
      <span class="header-menu-dropdown__bg-right"></span>
    </div>
    <div class="header-menu-dropdown__content">
      <div class="header-menu-dropdown__left">
        <h3 v-if="primaryTitle" class="header-menu-dropdown__main-title">{{ primaryTitle }}</h3>
        <the-header-menu-dropdown-nav :primary-nav-links="primaryNavLinks || []"/>
      </div>
      <div class="header-menu-dropdown__right">
        <h3 v-if="secondaryTitle" class="header-menu-dropdown__secondary-title">{{ secondaryTitle }}</h3>
        <p v-if="secondaryDescription" class="header-menu-dropdown__description">{{ secondaryDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue'
import {IHeaderMenuDropdown} from '@/types/interfaceHeaderMenu';

interface IPropsHeaderMenuDropdown extends IHeaderMenuDropdown {
  isShow?: boolean
}

const props = withDefaults(defineProps<IPropsHeaderMenuDropdown>(), {
  isShow: false
})

const TheHeaderMenuDropdownNav = defineAsyncComponent(() => import("@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdownNav/TheHeaderMenuDropdownNav.vue"));

const dynamicShowClass = computed(() => {
  const isShow = props.isShow;

  return isShow ? 'header-menu-dropdown--show' : null;
})

</script>

<style lang="scss" scoped>
.header-menu-dropdown {
  position: absolute;
  top: 100%;
  width: 90vw;
  left: 50%;
  transform: translateX(-50%) rotateX(-15deg);
  background-color: #fff;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  will-change: transform, opacity, visibility;
  transition-property: transform, opacity, visibility;
  transform-origin: 50% calc(50px * -1);
  transition-duration: .5s;
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
  0 30px 60px -30px rgb(0 0 0 / 20%),
  0 -18px 60px -10px rgb(0 0 0 / 2.5%);
  border-radius: 5px;


  &--show {
    top: 100%;
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
    transform: translateX(-50%) rotateX(0);
  }
}

.header-menu-dropdown__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.header-menu-dropdown__content,
.header-menu-dropdown__bg {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  border-radius: 5px;
  overflow: hidden;
}

.header-menu-dropdown__bg-left {
  background-color: #fff;
}

.header-menu-dropdown__bg-right {
  background-color: #f6f9fc;
}

.header-menu-dropdown__content {
  border: 1px solid transparent;
}

.header-menu-dropdown__left,
.header-menu-dropdown__right {
  display: flex;
  flex-direction: column;
  padding: 32px 15px 76px;
}

.header-menu-dropdown__left {
  margin-left: calc((90vw - 1170px) / 2);
  padding-right: 50px;
}

.header-menu-dropdown__right {
  margin-right: calc((90vw - 1170px) / 2);
  padding-left: 30px;
}

.header-menu-dropdown__main-title,
.header-menu-dropdown__secondary-title {
  font-size: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(223, 225, 230);
  color: rgb(23, 43, 77);
  margin-bottom: 16px;
}

.header-menu-dropdown__secondary-title {
  border-bottom-color: #EAEDFA;
}

.header-menu-dropdown__description {
  font-size: 12px;
  line-height: 1.5;
  color: rgb(80, 95, 121);
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
