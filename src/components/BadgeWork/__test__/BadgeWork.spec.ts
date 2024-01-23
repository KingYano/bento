import { describe, it, expect } from 'vitest';
import { mount } from "@vue/test-utils";
import BadgeWork from '@/components/BadgeWork/BadgeWork.vue';

describe('BadgeWork.vue', () => {
    it('renders with correct props and CSS classes when isOpen is true', async () => {
        const isOpen = true;
        const status = 'Open';

        const wrapper = mount(BadgeWork, {
            props: {
                isOpen,
                status,
            },
        });

        expect(wrapper.classes()).toContain('badge-work-open');
        expect(wrapper.classes()).not.toContain('badge-work-not-open');

        expect(wrapper.text()).toContain('Open');
    });

    it('renders with correct props and CSS classes when isOpen is false', async () => {
        const isOpen = false;
        const status = 'Closed';

        const wrapper = mount(BadgeWork, {
            props: {
                isOpen,
                status,
            },
        });

        expect(wrapper.classes()).toContain('badge-work-not-open');
        expect(wrapper.classes()).not.toContain('badge-work-open');

        expect(wrapper.text()).toContain('Closed');
    });
});
