import { Story } from '@storybook/react';
import { Theme } from 'shared/lib/providers/ThemeProvider';

// TODO пришлось назвать тему light -> root.
export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
