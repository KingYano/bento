import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import LargeContent from '@/components/Card/LargeContent/LargeContent.vue';

describe('LargeContent.vue', () => {
    it('renders an image when isImage is true', async () => {
        const imageUrl = 'test-image.jpg';
        const imageAlt = 'Test Image';
        const isImage = true;

        const wrapper = mount(LargeContent, {
            props: {
                isImage,
                imageUrl,
                imageAlt,
            },
        });

        expect(wrapper.find('.large-card__picture-img').exists()).toBe(true);
        expect(wrapper.find('.large-card__map').exists()).toBe(false);
        expect(wrapper.find('.large-card__picture-img').attributes('src')).toBe(imageUrl);
        expect(wrapper.find('.large-card__picture-img').attributes('alt')).toBe(imageAlt);
    });

    it('renders a map when isImage is false', async () => {
        const isImage = false;

        const wrapper = mount(LargeContent, {
            props: {
                isImage,
            },
        });

        expect(wrapper.find('.large-card__picture-img').exists()).toBe(false);
        expect(wrapper.find('.large-card__map').exists()).toBe(true);
    });
});
