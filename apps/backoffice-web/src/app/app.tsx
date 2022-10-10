import styled from '@emotion/styled';
import { Card, Button } from 'tabler-react';
import { Welcome } from '@ui-shared';
import NxWelcome from './nx-welcome';
import "tabler-react/dist/Tabler.css";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="backoffice-web" />
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
      <Welcome />
    </StyledApp>
  );
}

export default App;
