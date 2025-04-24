import { useEffect, useRef } from 'react';

import { MainTemplates } from '../../templates/MainTemplates';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveAllIcon } from 'lucide-react';

import { showMessages } from '../../adapters/showMessages';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionType } from '../../contexts/TaskContext/taskAction';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    document.title = `${state.formattedSecondsRemaining} - Configurações `;
  }, [state]);

  const workCycleInput = useRef<HTMLInputElement>(null);
  const breakShortCycleInput = useRef<HTMLInputElement>(null);
  const breakLongCycleInput = useRef<HTMLInputElement>(null);

  function handleSaveSetting(e: React.FormEvent<HTMLFormElement>) {
    showMessages.dismiss();
    e.preventDefault();

    const workCycle = Number(workCycleInput.current?.value);
    const breakShortCycle = Number(breakShortCycleInput.current?.value);
    const breakLongCycle = Number(breakLongCycleInput.current?.value);

    const erroFieldsInput = [];

    if (isNaN(workCycle) || isNaN(breakShortCycle) || isNaN(breakLongCycle)) {
      erroFieldsInput.push('Dígite apenas NÚMEROS em TODOS os campos.');
    }

    if (workCycle < 1 && workCycle > 60) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 60min para manter o foco.',
      );
    }
    if (breakShortCycle < 1 && breakShortCycle > 12) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 12min para descansos curtos.',
      );
    }
    if (breakLongCycle < 1 && breakLongCycle > 20) {
      erroFieldsInput.push(
        'Dígite valores entre 1min e 20min para descansos longos.',
      );
    }

    if (erroFieldsInput.length > 0) {
      erroFieldsInput.forEach(error => {
        showMessages.error(error);
      });

      return;
    }

    console.log('cheguei na função');
    dispatch({
      type: TaskActionType.CONFIG_TIMER,
      payload: { workCycle, breakShortCycle, breakLongCycle },
    });
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
