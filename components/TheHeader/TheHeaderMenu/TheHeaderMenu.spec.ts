import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import TheHeaderMenu from './TheHeaderMenu.vue';

describe('TheHeaderMenu', () => {
    it('Компонент не отображается, если не прокидовать пропс listItems', () => {
        const wrapper = mount(TheHeaderMenu);
        expect(wrapper.html()).toBe('<!--v-if-->');
    })
})