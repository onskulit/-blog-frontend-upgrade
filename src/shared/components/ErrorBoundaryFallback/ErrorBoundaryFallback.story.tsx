import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
    title: 'shared/components/ErrorBoundaryFallback',
    component: ErrorBoundaryFallback,
} as ComponentMeta<typeof ErrorBoundaryFallback>;

const Template: ComponentStory<typeof ErrorBoundaryFallback> = () => (
    <ErrorBoundaryFallback
        error={new Error('Тестовая ошибка')}
        resetErrorBoundary={() => {}}
    />
);

export const normal = Template.bind({});
normal.args = {};

export const normalDark = Template.bind({});
normalDark.args = {};
normalDark.decorators = [ThemeDecorator('dark')];
