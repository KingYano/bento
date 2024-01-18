import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import MediumProject from '@/components/Card/MediumProject/MediumProject.vue';

describe('MediumProject.vue', () => {
    it('renders with correct props and CSS classes when imageRightSide is true', async () => {
        const imageRightSide = true;
        const title = 'Test Title';
        const text = 'Test Text';
        const buttonText = 'Click Me';
        const buttonLink = 'https://example.com';
        const singleImageUrl = 'image.jpg';
        const singleImageAlt = 'Image Alt';

        const wrapper = mount(MediumProject, {
            props: {
                imageRightSide,
                title,
                text,
                buttonText,
                buttonLink,
                singleImageUrl,
                singleImageAlt,
            },
        });

        expect(wrapper.classes()).toContain('medium-project-card-normal');
        expect(wrapper.classes()).not.toContain('medium-project-card-reverse');

        expect(wrapper.html()).toContain('Test Title');
        expect(wrapper.html()).toContain('Test Text');
        expect(wrapper.html()).toContain('Click Me');
        expect(wrapper.find('.medium-card__command-link').attributes('href')).toBe('https://example.com');

        expect(wrapper.html()).toContain('image.jpg');
        expect(wrapper.html()).toContain('Image Alt');
    });

    it('renders with correct props and CSS classes when imageRightSide is false', async () => {
        const imageRightSide = false;
        const title = 'Test Title2';
        const text = 'Test Text2';
        const buttonText = 'Click Me2';
        const buttonLink = 'https://example2.com';
        const singleImageUrl = 'image2.jpg';
        const singleImageAlt = 'Image2 Alt';

        const wrapper = mount(MediumProject, {
            props: {
                imageRightSide,
                title,
                text,
                buttonText,
                buttonLink,
                singleImageUrl,
                singleImageAlt,
            },
        });

        expect(wrapper.classes()).toContain('medium-project-card-reverse');
        expect(wrapper.classes()).not.toContain('medium-project-card-normal');

        expect(wrapper.html()).toContain('Test Title2');
        expect(wrapper.html()).toContain('Test Text2');
        expect(wrapper.html()).toContain('Click Me2');
        expect(wrapper.find('.medium-card__command-link').attributes('href')).toBe('https://example2.com');

        expect(wrapper.html()).toContain('image2.jpg');
        expect(wrapper.html()).toContain('Image2 Alt');
    });
});
