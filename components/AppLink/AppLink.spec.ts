import {describe, it, expect, vi} from 'vitest';
import {mount, flushPromises} from '@vue/test-utils';
import AppLink from '@/components/AppLink/AppLink.vue';

describe('AppLink', () => {
    it('Компонент не отображается, если не прокидовать пропс to и (text или iconAfterText или iconBeforeText) ', () => {
        const wrapper = mount(AppLink);

        expect(wrapper.html()).toBe('<!--v-if-->');
        wrapper.unmount();
    })

    it('Компонент отображает текст, если прокинуть прокс to и text', async() => {
        const wrapper = mount(AppLink);
        await wrapper.setProps({
            to: 'link',
            text: 'text' 
        })
        await flushPromises();
        await vi.dynamicImportSettled();
        wrapper.html()//?
        expect(wrapper.find('.link__text').exists()).toBe(true);
        expect(wrapper.find('.link__text').text()).toBe('text');
        wrapper.unmount();
    })
})