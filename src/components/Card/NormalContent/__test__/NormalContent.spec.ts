import { describe, expect, test } from 'vitest';
import { mount } from "@vue/test-utils";
import NormalContent from '@/components/Card/NormalContent/NormalContent.vue';

describe('NormalContent.vue', () => {
    test('renders with correct props', async () => {
        const imageUrl = 'test-image.jpg';
        const imageAlt = 'Test Image';
        const text = 'Test Text';
        const buttonText = 'Click Me';
        const buttonLink = 'https://example.com';

        const wrapper = mount(NormalContent, {
            props: {
                imageUrl,
                imageAlt,
                text,
                buttonText,
                buttonLink,
            },
        });

        expect(wrapper.html()).toContain(imageUrl);
        expect(wrapper.html()).toContain(imageAlt);
        expect(wrapper.html()).toContain(text);
        expect(wrapper.html()).toContain(buttonText);

        const button = wrapper.find('.normal-card__command-link');
        expect(button.attributes('href')).toBe(buttonLink);
    });

    test('button exists and does not throw error on click', async () => {
        const wrapper = mount(NormalContent, {
            props: {
                imageUrl: 'test-image.jpg',
                imageAlt: 'Test Image',
                text: 'Test Text',
                buttonText: 'Click Me',
                buttonLink: 'https://example.com',
            },
        });

        const button = wrapper.find('.normal-card__command-button');
        expect(button.exists()).toBe(true);
        await button.trigger('click');
    });
});
