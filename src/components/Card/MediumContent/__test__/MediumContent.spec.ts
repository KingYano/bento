import { describe, expect, test } from 'vitest';
import { mount } from "@vue/test-utils";
import MediumContent from '@/components/Card/MediumContent/MediumContent.vue';

describe('MediumContent.vue', () => {
    test('renders with correct props', async () => {
        const imageUrl = 'test-image.jpg';
        const imageAlt = 'Test Image';
        const title = 'Test Title';
        const text = 'Test Text';
        const buttonText = 'Click Me';
        const buttonLink = 'https://example.com';
        const multipleImage = true;
        const imagesUrlFirst = 'image1.jpg';
        const imagesAltFirst = 'Image 1 Alt';
        const imagesUrlSecond = 'image2.jpg';
        const imagesAltSecond = 'Image 2 Alt';
        const imagesUrlThird = 'image3.jpg';
        const imageAltThird = 'Image 3 Alt';
        const imagesUrlFour = 'image4.jpg';
        const imagesAltFour = 'Image 4 Alt';
        const singleImageUrl = 'image4.jpg';
        const singleImageAlt = 'Image 4 Alt';

        const wrapper = mount(MediumContent, {
            props: {
                imageUrl,
                imageAlt,
                title,
                text,
                buttonText,
                buttonLink,
                multipleImage,
                imagesUrlFirst,
                imagesAltFirst,
                imagesUrlSecond,
                imagesAltSecond,
                imagesUrlThird,
                imageAltThird,
                imagesUrlFour,
                imagesAltFour,
                singleImageUrl,
                singleImageAlt,
            },
        });

        expect(wrapper.html()).toContain(imageUrl);
        expect(wrapper.html()).toContain(imageAlt);
        expect(wrapper.html()).toContain(title);
        expect(wrapper.html()).toContain(text);
        expect(wrapper.html()).toContain(buttonText);
        expect(wrapper.find('.medium-card__command-link').attributes('href')).toBe(buttonLink);

        if (multipleImage) {
            expect(wrapper.find('.medium-card__multiple-images').exists()).toBe(true);
            expect(wrapper.find('.medium-card__single-images').exists()).toBe(false);
            expect(wrapper.html()).toContain(imagesUrlFirst);
            expect(wrapper.html()).toContain(imagesAltFirst);
            expect(wrapper.html()).toContain(imagesUrlSecond);
            expect(wrapper.html()).toContain(imagesAltSecond);
            expect(wrapper.html()).toContain(imagesUrlThird);
            expect(wrapper.html()).toContain(imageAltThird);
            expect(wrapper.html()).toContain(imagesUrlFour);
            expect(wrapper.html()).toContain(imagesAltFour);
        } else {
            expect(wrapper.find('.medium-card__multiple-images').exists()).toBe(false);
            expect(wrapper.find('.medium-card__single-images').exists()).toBe(true);
            expect(wrapper.html()).toContain(singleImageUrl);
            expect(wrapper.html()).toContain(singleImageAlt);
        }
    });

    test('renders without multiple images when multipleImage is false', async () => {
        const wrapper = mount(MediumContent, {
            props: {
                imageUrl: 'test-image.jpg',
                imageAlt: 'Test Image',
                title: 'Test Title',
                text: 'Test Text',
                buttonText: 'Click Me',
                buttonLink: 'https://example.com',
                multipleImage: false,
                imagesUrlFirst: 'image1.jpg',
                imagesAltFirst: 'Image 1 Alt',
                imagesUrlSecond: 'image2.jpg',
                imagesAltSecond: 'Image 2 Alt',
                imagesUrlThird: 'image3.jpg',
                imageAltThird: 'Image 3 Alt',
                imagesUrlFour: 'image4.jpg',
                imagesAltFour: 'Image 4 Alt',
                singleImageUrl: 'image4.jpg',
                singleImageAlt: 'Image 4 Alt',
            },
        });

        expect(wrapper.html()).toContain('test-image.jpg');
        expect(wrapper.html()).toContain('Test Image');
        expect(wrapper.html()).toContain('Test Title');
        expect(wrapper.html()).toContain('Test Text');
        expect(wrapper.html()).toContain('Click Me');
        expect(wrapper.find('.medium-card__command-link').attributes('href')).toBe('https://example.com');

        expect(wrapper.find('.medium-card__multiple-images').exists()).toBe(false);
        expect(wrapper.find('.medium-card__single-images').exists()).toBe(true);
        expect(wrapper.html()).toContain('image4.jpg');
        expect(wrapper.html()).toContain('Image 4 Alt');
    });
});