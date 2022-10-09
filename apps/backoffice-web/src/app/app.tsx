import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { UiShared } from '@ui-shared';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="backoffice-web" />
      <UiShared />
    </StyledApp>
  );
}

export default App;
