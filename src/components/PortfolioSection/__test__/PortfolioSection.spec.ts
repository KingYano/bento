import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection.vue';

describe('ProfileSection.vue', () => {
    it('renders with correct content and components', async () => {
        const wrapper = mount(PortfolioSection);

        expect(wrapper.text()).toContain('Mes Réseaux (contactez-moi)');
        expect(wrapper.text()).toContain('Mes projets');
        expect(wrapper.text()).toContain('Localisation');
        expect(wrapper.text()).toContain('©Yanis Belkadi - 2024');
        expect(wrapper.text()).toContain('V◦1');

        expect(wrapper.findComponent({ name: 'NormalContent' })).toBeTruthy();
        expect(wrapper.findComponent({ name: 'MediumContent' })).toBeTruthy();
        expect(wrapper.findComponent({ name: 'MediumProject' })).toBeTruthy();
        expect(wrapper.findComponent({ name: 'LargeContent' })).toBeTruthy();
    });
});
