import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { Container } from '../../components/Container';

type MainTemplatesTypes = {
  children: React.ReactNode;
};

export function MainTemplates({ children }: MainTemplatesTypes) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
