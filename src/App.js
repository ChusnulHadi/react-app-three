// import logo from './logo.svg';
import GetStarted from './components/GetStarted';
import './App.css';
// import Frame from './components/Frame';
import Workspace from './components/Workspace';

import styled from 'styled-components';

// import background from './views/Frame1.svg';

function App() {
  return (
    <Wrapper>
      <GetStarted />
      <Workspace />
    </Wrapper>

  );
}
export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
