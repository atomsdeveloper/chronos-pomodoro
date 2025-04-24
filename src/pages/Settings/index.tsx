import { MainTemplates } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveAllIcon } from 'lucide-react';

export function Settings() {
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
          />

          <Input
            id='breakShortCycle'
            label='Descanso curto'
            type='text'
            placeholder=''
            title='Duração do descanso curto'
            aria-label='Configuração da duração do descanso curto'
          />

          <Input
            id='breakLongCycle'
            label='Descanso longo'
            type='text'
            placeholder=''
            title='Duração do descanso longo'
            aria-label='Configuração da duração do descanso longo'
          />

          <Container>
            <Button icon={<SaveAllIcon />} style={{ width: '300px' }} />
          </Container>
        </form>
      </Container>
    </MainTemplates>
  );
}
