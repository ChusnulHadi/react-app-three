import './App.css';

import GetStarted from './components/GetStarted';
// import Workspace from './components/Workspace';

import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <GetStarted />
      {/* <Workspace /> */}
    </Wrapper>

  );
}
export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
