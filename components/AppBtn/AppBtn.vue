<template>
  <component :is="dynamicComponent" class="btn" :to="to ? to : null" :class="[dynamicActiveClass]">
    <div class="btn__content">
      <span v-show="isLoading" class="btn__loading"></span>

      <span v-if="iconBeforeText && activeIconBeforeText" class="btn__wrapper-icon">
                <app-svg-sprite v-show="isActive && !isLoading" class="btn__icon btn__icon--before"
                                :icon-name="iconBeforeText"/>
                <app-svg-sprite v-show="!isActive && !isLoading" class="btn__icon btn__icon--active-before"
                                :icon-name="activeIconBeforeText"/>
      </span>

      <span v-else-if="iconBeforeText || activeIconBeforeText" class="btn__wrapper-icon">
                <app-svg-sprite v-show="!isLoading" class="btn__icon btn__icon--before"
                                :icon-name="iconBeforeText || activeIconBeforeText"/>
      </span>

      <span v-if="text" v-show="!isLoading" class="btn__text">{{ text }}</span>

      <span v-if="iconAfterText && activeIconAfterText" class="btn__wrapper-icon">
                <app-svg-sprite v-show="isActive && !isLoading" class="btn__icon btn__icon--after"
                                :icon-name="iconAfterText"/>
                <app-svg-sprite v-show="!isActive && !isLoading" class="btn__icon btn__icon--active-after"
                                :icon-name="activeIconAfterText"/>
      </span>


      <span v-else-if="iconAfterText || activeIconAfterText" class="btn__wrapper-icon">
                <app-svg-sprite v-show="!isLoading" class="btn__icon btn__icon--after"
                                :icon-name="iconAfterText || activeIconAfterText"/>
      </span>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {defineAsyncComponent, computed, resolveComponent} from 'vue';
import {InterfaceAppBtn} from '@/types/interfaceAppBtn';

const props = withDefaults(defineProps<InterfaceAppBtn>(),
    {
      to: undefined,
      isLoading: false,
      isActive: false,
      activeIconBeforeText: null,
      iconBeforeText: null,
      text: null,
      iconAfterText: null,
      activeIconAfterText: null
    }
)

const AppSvgSprite = defineAsyncComponent(() => import('@/components/AppSvgSprite/AppSvgSprite.vue'));

const dynamicComponent = computed((): any => {
  const to = props.to;
  return to ? resolveComponent('NuxtLink') : 'button';
})

const dynamicActiveClass = computed(() => {
  const isActive = props.isActive;

  return isActive ? 'btn--active' : null;
})
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &--no-style {
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
}

.btn__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.btn__wrapper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 15px;
  height: 15px;
}

.btn__icon {
  &.icon--border-arrow-down {
    width: 13px;
    height: 8px;
  }
}
</style>