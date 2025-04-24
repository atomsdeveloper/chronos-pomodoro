import { MainTemplates } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveAllIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessages } from '../../adapters/showMessages';

export function Settings() {
  const { state } = useTaskContext();

  const workCycleInput = useRef<HTMLInputElement>(null);
  const breakShortCycleInput = useRef<HTMLInputElement>(null);
  const breakLongCycleInput = useRef<HTMLInputElement>(null);

  function handleSaveSetting(e: React.FormEvent<HTMLFormElement>) {
    showMessages.dismiss();
    e.preventDefault();

    const workCycleData = Number(workCycleInput.current?.value);
    const breakShortCycleData = Number(breakShortCycleInput.current?.value);
    const breakLongCycleData = Number(breakLongCycleInput.current?.value);

    const erroFieldsInput = [];

    if (
      isNaN(workCycleData) ||
      isNaN(breakShortCycleData) ||
      isNaN(breakLongCycleData)
    ) {
      erroFieldsInput.push('Dígite apenas NÚMEROS em TODOS os campos.');
    }

    if (workCycleData < 1 && workCycleData > 60) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 60min para manter o foco.',
      );
    }
    if (breakShortCycleData < 1 && breakShortCycleData > 12) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 12min para descansos curtos.',
      );
    }
    if (breakLongCycleData < 1 && breakLongCycleData > 20) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 20min para descansos longos.',
      );
    }

    if (erroFieldsInput.length > 0) {
      erroFieldsInput.forEach(error => {
        showMessages.error(error);
      });
    }

    console.log(workCycleData, breakShortCycleData, breakLongCycleData);
    console.log('Salvar');
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
            type='number'
            placeholder=''
            title='Duração do trabalho'
            aria-label='Configuração da duração do tempo de trabalho'
            ref={workCycleInput}
            defaultValue={state.config.workCycle}
          />

          <Input
            id='breakShortCycle'
            label='Descanso curto'
            type='number'
            placeholder=''
            title='Duração do descanso curto'
            aria-label='Configuração da duração do descanso curto'
            ref={breakShortCycleInput}
            defaultValue={state.config.breakShortCycle}
          />

          <Input
            id='breakLongCycle'
            label='Descanso longo'
            type='number'
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
