import { MainTemplates } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';

import { HeadingHistory } from '../../components/HeadingHistory';
import { TableHistory } from '../../components/TableHistory';

export function History() {
  return (
    <MainTemplates>
      <HeadingHistory />

      <Container>
        <TableHistory />
      </Container>
    </MainTemplates>
  );
}
