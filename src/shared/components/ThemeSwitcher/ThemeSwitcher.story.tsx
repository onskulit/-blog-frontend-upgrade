import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/components/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
