import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './Main';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'pages/main/Main',
    component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
