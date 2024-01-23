import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import LeftSide from '@/components/LeftSide/LeftSide.vue';

describe('LeftSide.vue', () => {
    it('renders with correct content', async () => {
        const wrapper = mount(LeftSide);

        expect(wrapper.text()).toContain('Yanis BELKADI');
        expect(wrapper.text()).toContain("Je suis Yanis, développeur front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et Javascript.");
        expect(wrapper.text()).toContain("Actuellement en dernière année d'étude supérieur(+5) en alternance au sein d'une entreprise dynnamique, développant un SaaS applicatif innovant.");
        expect(wrapper.text()).toContain("Prestations :");
        expect(wrapper.text()).toContain("-> Landing page / Site vitrine, totalement responsive.");
        expect(wrapper.text()).toContain("-> Webapps en Vue.Js.");
        expect(wrapper.text()).toContain("-> Fonctionnalités en Vue.Js.");
        expect(wrapper.text()).toContain("Disponible pour des missions en freelance.");

        expect(wrapper.find('.left-side-image-profile').exists()).toBe(true);

        const badgeWork = wrapper.findComponent({ name: 'BadgeWork' });
        expect(badgeWork.props('isOpen')).toBe(true);
        expect(badgeWork.props('status')).toBe('Open to Work');
    });
});
