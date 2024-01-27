import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import BadgeWork from '@/components/BadgeWork/BadgeWork.vue';

describe('BadgeWork.vue', () => {
    it('renders correctly when isOpen is true', async () => {
        const wrapper = mount(BadgeWork, { props: { isOpen: true } });
        expect(wrapper.classes()).toContain('badge-work-open');
        expect(wrapper.text()).toBe('Open to work');
    });

    it('renders correctly when isOpen is false', async () => {
        const wrapper = mount(BadgeWork, { props: { isOpen: false } });
        expect(wrapper.classes()).toContain('badge-work-not-open');
        expect(wrapper.text()).toBe('Already in work');
    });
});
