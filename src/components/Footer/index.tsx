import { LinkRouter } from '../LinkRouter';
import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <LinkRouter href='#'>Entenda o conceito do Pomodoro</LinkRouter>
      <LinkRouter href='#'>
        Chronos Pomodoro &copy; Feito com 💚 por Renan Nascimento.
      </LinkRouter>
    </div>
  );
}
