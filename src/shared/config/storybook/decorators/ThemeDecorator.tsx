import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/lib/providers/ThemeProvider';

// TODO пришлось назвать тему light -> root.
export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
    );
