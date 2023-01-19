import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppContainer from '@/components/AppContainer/AppContainer.vue';

describe('AppContainer', () => {
    it('Компонент не отображается, если не помещать данные в слот', () => {
        const wrapper = mount({
            template: '<app-container></app-container>',
            components: {
                'app-container': AppContainer
            }
        })

        expect(wrapper.html()).toBe('<!--v-if-->')
        wrapper.unmount()
    })

    it('Рендеринг контента помещенного в слот', () => {
        const wrapper = mount({
            template: '<app-container><div class="test"></div></app-container>',
            components: {
                'app-container': AppContainer
            }
        })

        expect(wrapper.find('.test').exists()).toBe(true)
        wrapper.unmount()
    })

    it('Добавление класса "container--big" при передаче пропса size === "big"', () => {
        const wrapper = mount({
            template: '<app-container size="big"><div class="test"></div></app-container>',
            components: {
                'app-container': AppContainer
            }
        })

        expect(wrapper.classes()).toEqual(['container', 'container--big'])
        wrapper.unmount()
    })

    it('Отсутсвие класса "container--big" при передаче пропса size !== "big"', () => {
        const wrapper = mount({
            template: '<app-container size="small"><div class="test"></div></app-container>',
            components: {
                'app-container': AppContainer
            }
        })

        expect(wrapper.classes()).toEqual(['container'])
        wrapper.unmount()
    })
})