import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';

export default {
    title: 'shared/components/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Кнопка тест</Button>

export const clear = Template.bind({});
clear.args = {}

export const outline = Template.bind({});
outline.args = {theme: 'outline'}