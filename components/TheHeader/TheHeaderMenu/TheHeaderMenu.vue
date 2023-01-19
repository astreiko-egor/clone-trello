<template>
  <nav class="header-menu" v-if="isShow">
    <ul class="header-menu__list">
      <li class="header-menu__item" v-for="(item, index) in listItems" :key="index">
        <app-btn class="btn--no-style header-menu__btn" v-bind="item.link" :is-active="attrs.modelValue === index" :target="item.link?.target ? '_blank' : null"
                 @click="item.dropdown ? onClick(index) : null"/>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {defineAsyncComponent, computed, useAttrs} from 'vue';
import {IHeaderMenuLink, IHeaderMenuDropdown} from '@/types/interfaceHeaderMenu'

type ListItems = {
  // Id пункта меню
  id?: string | number;
  link?: IHeaderMenuLink;
  // Дропдаун меню
  dropdown?: IHeaderMenuDropdown | null;
}

const AppBtn = defineAsyncComponent(() => import('@/components/AppBtn/AppBtn.vue'))

const props = withDefaults(
    defineProps<{
      // Список пунктов меню
      listItems?: ListItems[] | null;
    }>(),
    {
      listItems: null
    }
)

const emit = defineEmits<{
  (e: 'update:modelValue', index: number): void;
}>();

const attrs = useAttrs();

/**
 * Отрисовывать ли компонент
 * @function
 * @return boolean
 */
const isShow = computed(() => {
  const listItems = props.listItems;

  return listItems && listItems.length;
})

const onClick = (index: number) => {
  emit('update:modelValue', attrs.modelValue === index ? -1 : index)
}
</script>

<style lang="scss" scoped>
.header-menu__list {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.header-menu__item {
  padding: 20px 16px;
}
</style>