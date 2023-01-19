<template>
    <nav class="header-menu" v-if="isShow">
        <ul class="header-menu__list">
            <li class="header-menu__item" v-for="(item, index) in listItems" :key="index">
                <template v-if="item.dropdown && Object.keys(item.dropdown).length">
                    <app-btn class="btn--no-style header-menu__btn" v-bind="item.link" :target="item.link?.target ? '_blank' : null" />
                    <the-header-menu-dropdown :v-bind="item.dropdown" />
                </template>
                <template v-else>
                    <app-btn class="btn--no-style header-menu__link" v-bind="item.link" :target="item.link?.target ? '_blank' : null" />
                </template>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue';
import {IHeaderMenuLink, IHeaderMenuDropdown} from '@/types/interfaceHeaderMenu'

type ListItems = {
    // Id пункта меню
    id?: string | number;
    link?: IHeaderMenuLink;
    // Дропдаун меню
    dropdown?: IHeaderMenuDropdown | null;
}

const AppLink = defineAsyncComponent(() => import('@/components/AppLink/AppLink.vue'))
const AppBtn = defineAsyncComponent(() => import('@/components/AppBtn/AppBtn.vue'))
const TheHeaderMenuDropdown = defineAsyncComponent(() => import('@/components/TheHeader/TheHeaderMenu/TheHeaderMenuDropdown/TheHeaderMenuDropdown.vue'))

const props = withDefaults(
    defineProps<{
        // Список пунктов меню
        listItems?: ListItems[] | null;
    }>(),
    {
        listItems: null
    }
)

/**
 * Отрисовывать ли компонент
 * @function
 * @return boolean
 */
const isShow = computed(() => {
    const listItems = props.listItems;

    return listItems && listItems.length;
})
</script>