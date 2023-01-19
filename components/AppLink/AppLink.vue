<template>
  <nuxt-link :to="to" class="link" v-if="isShow">
    <div class="link__content">
      <app-svg-sprite v-if="iconBeforeText" class="link__icon link__icon--before-text"
                      :icon-name="iconBeforeText"/>
      <span v-if="text" class="link__text">{{ text }}</span>
      <app-svg-sprite v-if="iconAfterText" class="link__icon link__icon--after-text" :icon-name="iconAfterText"/>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import {defineAsyncComponent, computed} from 'vue';
import {InterfaceAppLink} from '@/types/interfaceAppLink'

const props = withDefaults(defineProps<InterfaceAppLink>(),
    {
      to: undefined,
      iconBeforeText: null,
      text: null,
      iconAfterText: null,
    }
)

const AppSvgSprite = defineAsyncComponent(() => import('@/components/AppSvgSprite/AppSvgSprite.vue'))

/**
 * Отрисовывать ли компонент
 * @function
 * @return boolean
 */
const isShow = computed(() => {
  const {to, text, iconAfterText, iconBeforeText} = props;

  return to && (text || iconAfterText || iconBeforeText)
})
</script>