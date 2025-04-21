import { Button } from '../Button';
import { Container } from '../Container';
import { Heading } from '../Heading';

import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';

export function HeadingHistory() {
  return (
    <Container>
      <div className={styles.content}>
        <Heading>Histórico</Heading>
        <span className={styles.container}>
          <Button
            icon={<TrashIcon />}
            color='red'
            aria-label='Apagar todo histórico'
            title='Apagar histórico'
          />
        </span>
      </div>
    </Container>
  );
}
