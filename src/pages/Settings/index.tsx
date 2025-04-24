import { MainTemplates } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveAllIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();

  const workCycleInput = useRef<HTMLInputElement>(null);
  const breakShortCycleInput = useRef<HTMLInputElement>(null);
  const breakLongCycleInput = useRef<HTMLInputElement>(null);

  function handleSaveSetting(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workCycleData = workCycleInput.current?.value;
    const breakShortCycleData = breakShortCycleInput.current?.value;
    const breakLongCycleData = breakLongCycleInput.current?.value;

    console.log(workCycleData, breakShortCycleData, breakLongCycleData);
  }

  return (
    <MainTemplates>
      <Container>
        <Heading>Configurações</Heading>
        <p style={{ textAlign: 'center', paddingTop: '2.2rem' }}>
          Configure o tempo de cada uma das tarefas da forma que quiser.
        </p>
      </Container>

      <Container>
        <form
          action=''
          onSubmit={handleSaveSetting}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.2rem',
          }}
        >
          <Input
            id='workCycle'
            label='Foco'
            type='text'
            placeholder=''
            title='Duração do trabalho'
            aria-label='Configuração da duração do tempo de trabalho'
            ref={workCycleInput}
            defaultValue={state.config.workCycle}
          />

          <Input
            id='breakShortCycle'
            label='Descanso curto'
            type='text'
            placeholder=''
            title='Duração do descanso curto'
            aria-label='Configuração da duração do descanso curto'
            ref={breakShortCycleInput}
            defaultValue={state.config.breakShortCycle}
          />

          <Input
            id='breakLongCycle'
            label='Descanso longo'
            type='text'
            placeholder=''
            title='Duração do descanso longo'
            aria-label='Configuração da duração do descanso longo'
            ref={breakLongCycleInput}
            defaultValue={state.config.breakLongCycle}
          />

          <Container>
            <Button icon={<SaveAllIcon />} style={{ width: '300px' }} />
          </Container>
        </form>
      </Container>
    </MainTemplates>
  );
}
