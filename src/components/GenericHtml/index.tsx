import styles from './style.module.css';

type GenericHtmlType = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlType) {
  return <div className={styles.containerGenericHtml}>{children}</div>;
}
