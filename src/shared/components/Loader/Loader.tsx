import { classNames } from 'shared/lib/helpers';
import styles from './Loader.module.scss';

/** Props for component Loader */
interface LoaderProps {
/** External className */
className?: string;
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.Loader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
