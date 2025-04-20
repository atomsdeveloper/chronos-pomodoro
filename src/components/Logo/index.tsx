import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { LinkRouter } from '../LinkRouter';

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <LinkRouter href='#' className={styles.logoLink}>
        <TimerIcon />
        <span> Chronos </span>
      </LinkRouter>
    </div>
  );
}
