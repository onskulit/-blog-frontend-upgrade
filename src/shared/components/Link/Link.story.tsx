import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Link } from './Link';

export default {
    title: 'shared/components/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
    <Link {...args}>Тестовая ссылка</Link>
);

export const primary = Template.bind({});
primary.args = {};

export const primaryDark = Template.bind({});
primaryDark.args = {};
primaryDark.decorators = [ThemeDecorator('dark')];

export const secondary = Template.bind({});
secondary.args = { theme: 'secondary' };

export const secondaryDark = Template.bind({});
secondaryDark.args = { theme: 'secondary' };
secondaryDark.decorators = [ThemeDecorator('dark')];
