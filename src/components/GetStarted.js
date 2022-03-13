import styled from "styled-components";
import Frame from "./Frame";

import background from '../views/Frame1.svg';

const GetStarted = () => {
    return (
        <PageOne>
            <Frame />
        </PageOne>
    )
}

export default GetStarted;

const PageOne = styled.div`
    display: flex;
    justify-content: center;

    background: url(${background});

    height: 100vh;
    width:100vw;
`;