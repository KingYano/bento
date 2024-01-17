import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import LargeContent from '@/components/Card/LargeContent/LargeContent.vue';

describe('LargeContent.vue', () => {
    it('renders an image when isImage is true', async () => {
        const isImage = true;
        const imageUrl = 'test-image.jpg';
        const imageAlt = 'Test Image';

        const wrapper = mount(LargeContent, {
            props: {
                isImage,
                imageUrl,
                imageAlt,
            },
        });

        expect(wrapper.find('.large-card__picture').exists()).toBe(true); // Vérifie que la classe large-card__picture existe
        expect(wrapper.find('.large-card__map').exists()).toBe(false); // Vérifie que la classe large-card__map n'existe pas
        expect(wrapper.html()).toContain('<img class="large-card__picture-img"'); // Vérifie que la balise img est présente
        expect(wrapper.html()).toContain(`src="${imageUrl}"`); // Vérifie que l'attribut src correspond à l'URL de l'image
        expect(wrapper.html()).toContain(`alt="${imageAlt}"`); // Vérifie que l'attribut alt correspond à l'alt de l'image
    });

    it('renders a map when isImage is false', async () => {
        const isImage = false;
        const imageUrl = 'test-map.jpg';
        const imageAlt = 'Test Map';

        const wrapper = mount(LargeContent, {
            props: {
                isImage,
                imageUrl,
                imageAlt,
            },
        });

        expect(wrapper.find('.large-card__picture').exists()).toBe(false); // Vérifie que la classe large-card__picture n'existe pas
        expect(wrapper.find('.large-card__map').exists()).toBe(true); // Vérifie que la classe large-card__map existe
        expect(wrapper.html()).toContain('<img class="large-card__map-img"'); // Vérifie que la balise img est présente
        expect(wrapper.html()).toContain(`src="${imageUrl}"`); // Vérifie que l'attribut src correspond à l'URL de la carte
        expect(wrapper.html()).toContain(`alt="${imageAlt}"`); // Vérifie que l'attribut alt correspond à l'alt de la carte
    });
});
