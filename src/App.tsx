import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>Este é meu componente</Heading>
      </Container>
    </>
  );
}
