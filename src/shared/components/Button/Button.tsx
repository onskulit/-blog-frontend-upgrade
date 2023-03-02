import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/helpers';
import styles from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline';

/** Props for component Button */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Theme */
    theme?: ButtonTheme;
    /** External className */
    className?: string;
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const {
        theme = 'clear', className, children, ...otherProps
    } = props;
    return (
        <button
            data-testid="button"
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
