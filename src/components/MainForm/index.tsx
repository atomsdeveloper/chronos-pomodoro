import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function MainForm() {
  return (
    <form className='formContainer' action=''>
      <div className='formRow'>
        <Input
          id='input'
          label='Task'
          type='text'
          title='Descrição da tarefa'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Button icon={<PlayCircleIcon />} color='green' />
        {/* <Button icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
