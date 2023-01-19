import {describe, it, expect, vi} from 'vitest';
import {mount} from '@vue/test-utils';
import TheHeader from '@/components/TheHeader/TheHeader.vue';

describe('TheHeader', () => {
    it('Правильный класс, при рендеринге', () => {
        const wrapper = mount(TheHeader);

        expect(wrapper.classes()).toEqual(['header'])
        wrapper.unmount()
    })

    it('Рендеринг html потомков', async() => {
        const wrapper = mount(TheHeader);

        await vi.dynamicImportSettled();
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.header__content').exists()).toBe(true);
    })
})