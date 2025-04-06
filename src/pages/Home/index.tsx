import { MainTemplates } from '../../templates/MainTemplates';
import { CountDown } from '../../components/CountDown';
import { Container } from '../../components/Container';
import { MainForm } from '../../components/MainForm';

export function Home() {
  return (
    <MainTemplates>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  );
}
