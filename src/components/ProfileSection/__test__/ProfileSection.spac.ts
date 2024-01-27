import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import ProfileSection from '@/components/ProfileSection/ProfileSection.vue';

describe('ProfileSection.vue', () => {
    it('renders with correct content and components', async () => {
        const wrapper = mount(ProfileSection);

        expect(wrapper.text()).toContain('Yanis BELKADI');
        expect(wrapper.text()).toContain('Je suis Yanis, développeur front-end et UX/UI designer vivant à Paris, spécialisé en VueJS et JavaScript.');
        expect(wrapper.text()).toContain('Actuellement en dernière année d\'études supérieures (+5) en alternance au sein d\'une entreprise dynamique, développant un SaaS applicatif innovant.');
        expect(wrapper.text()).toContain('Prestations :');
        expect(wrapper.text()).toContain('-> Landing page / Site vitrine, totalement responsive.');
        expect(wrapper.text()).toContain('-> Webapps en Vue.Js.');
        expect(wrapper.text()).toContain('-> Fonctionnalités en Vue.Js.');
        expect(wrapper.text()).toContain('Disponible pour des missions en freelance.');

        const badgeWorkComponent = wrapper.findComponent({ name: 'BadgeWork' });
        expect(badgeWorkComponent.exists()).toBeTruthy();
        expect(badgeWorkComponent.props('isOpen')).toBe(true);
        expect(badgeWorkComponent.props('status')).toBe('Open to Work');
    });
});
