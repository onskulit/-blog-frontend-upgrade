import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Main from './Main';

export default {
    title: 'pages/main/Main',
    component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main />

export const primary = Template.bind({});
primary.args = {}