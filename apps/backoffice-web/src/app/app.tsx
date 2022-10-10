import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { Welcome } from '@ui-shared';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="backoffice-web" />
      <Welcome />
    </StyledApp>
  );
}

export default App;
