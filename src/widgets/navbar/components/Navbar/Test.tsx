import { classNames } from "shared/lib/helpers";
import styles from "./Test.module.scss";

/** Пропсы компонента Test */
interface TestProps {
  /** Внешний className */
  className?: string;
}

export const Test = (props: TestProps) => {
  const { className } = props;
  return <div className={classNames(styles.Test, {}, [className])}>Test</div>;
};
