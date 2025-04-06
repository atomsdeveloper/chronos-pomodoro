import { Container } from '../../components/Container';
import { MainTemplates } from '../../templates/MainTemplates';

export function NotFound() {
  return (
    <MainTemplates>
      <Container>
        <h1>Página não encontrada</h1>
      </Container>
    </MainTemplates>
  );
}
