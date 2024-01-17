import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import SmallContent from '@/components/Card/SmallContent/SmallContent.vue';

describe('SmallContent.vue', () => {
    it('renders text when isLink is false', async () => {
        const wrapper = mount(SmallContent, {
            props: {
                imageUrl: 'test-image.jpg',
                imageAlt: 'Test Image',
                text: 'Test Text',
                textHref: 'https://example.com',
                isLink: false,
            },
        });

        expect(wrapper.html()).toContain('Test Text');
        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('renders a link when isLink is true', async () => {
        const wrapper = mount(SmallContent, {
            props: {
                imageUrl: 'test-image.jpg',
                imageAlt: 'Test Image',
                text: 'Test Text',
                textHref: 'https://example.com',
                isLink: true,
            },
        });

        expect(wrapper.find('a').exists()).toBe(true);
        expect(wrapper.find('a').attributes('href')).toBe('https://example.com');
        expect(wrapper.find('a').text()).toBe('Test Text');
    });
});
