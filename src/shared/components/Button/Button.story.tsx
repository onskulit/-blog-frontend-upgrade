import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Кнопка тест</Button>
);

export const clear = Template.bind({});
clear.args = {};

export const clearDark = Template.bind({});
clearDark.args = {};
clearDark.decorators = [ThemeDecorator('dark')];

export const outline = Template.bind({});
outline.args = { theme: 'outline' };

export const outlineDark = Template.bind({});
outlineDark.args = { theme: 'outline' };
outlineDark.decorators = [ThemeDecorator('dark')];
