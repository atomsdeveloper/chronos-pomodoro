import { useEffect } from 'react';

import { MainTemplates } from '../../templates/MainTemplates';

import { Container } from '../../components/Container';
import { HeadingHistory } from '../../components/HeadingHistory';
import { TableHistory } from '../../components/TableHistory';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function History() {
  const { state } = useTaskContext();

  useEffect(() => {
    document.title = `${state.formattedSecondsRemaining} - Histórico das Tarefas `;
  }, [state]);

  return (
    <MainTemplates>
      <HeadingHistory />

      <Container>
        <TableHistory />
      </Container>
    </MainTemplates>
  );
}
