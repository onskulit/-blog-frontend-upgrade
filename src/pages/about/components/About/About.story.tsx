import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import About from './About';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'pages/about/About',
    component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
