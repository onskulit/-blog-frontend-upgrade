import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
