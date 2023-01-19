<template>
    <div class="container" :class="[dynamicSizeClass]" v-if="isShow"><slot /></div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';

const props = withDefaults(defineProps<{
    // Размер контейнера 
    size?: null | 'big'
}>(),
    {
        size: null,
    }
)

const slots = useSlots();

/**
 * Отрисовывать ли компонент
 * @function
 * @return boolean
 */
const isShow = computed(() => {
    return !!slots.default
})

/**
 * Динамический класс размера контейнера
 * @function
 * @return string | null
 */
const dynamicSizeClass = computed(() => {
    const size = props.size;

    return size === 'big' ? 'container--big' : null;
})
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    padding-left: 15px;
    padding-right: 15px;

    &--big {
        max-width: 1350px;
    }
}
</style>
