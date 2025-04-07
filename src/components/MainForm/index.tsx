import styles from './sytles.module.css';

import { PlayCircleIcon } from 'lucide-react';

import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function MainForm() {
  return (
    <form className={styles.formContainer} action=''>
      <div className={styles.formRow}>
        <Input
          id='input'
          label='Task'
          type='text'
          title='Descrição da tarefa'
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <Button type='button' icon={<PlayCircleIcon />} color='green' />
        {/* <Button icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
