import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'widgets/sidebar/Sidebar',
    component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
