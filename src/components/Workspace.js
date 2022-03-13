import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import Aio from './elements/3D/characters/Aio';
import Mark1 from './elements/3D/characters/Mark1';
import Swordgirl from './elements/3D/characters/Swordgirl';
import ResourceBox from './elements/3D/properties/ResourceBox';
import Barral from './elements/3D/properties/Barral';
import PebblePad from './elements/3D/properties/PebblePad';
import GasPump from './elements/3D/properties/GasPump';

const Workspace = () => {

    let [state, setState] = useState(null);

    const handleClick = (event) => {
        setState(event.target.id);

        console.log(state);
    }

    return (
        <Wrapper id="page2">
            <Element>
                <Canvas>
                    <spotLight
                        position={[-15, 5, -5]}
                        intensity={0.5}
                        // castShadow={true}
                        // shadow-mapSize-shadowMapHeight={1000}
                        // shadow-mapSize-shadowMapWidth={1000}
                    />
                    <ambientLight intensity={0.3} />
                    <directionalLight
                        position={[15, -5, 5]}
                        intensity={1}
                    />

                    <OrbitControls enableZoom={false} />
                    {(() => {
                        switch (state) {
                            case '1':
                                return (
                                    <>
                                        {/* <Aio /> */}
                                        <ResourceBox />
                                    </>

                                );
                            case '2':
                                return (
                                    <>
                                       {/* <Mark1 /> */}
                                        <Barral />
                                        <GasPump />
                                    </>
                                );
                            case '3':
                                return (
                                    <>
                                        <Swordgirl />
                                        <ResourceBox />
                                        <GasPump />
                                    </>
                                );
                            default:
                                return null;
                        }
                    })()}
                    <PebblePad />
                </Canvas>
                <Option>
                    <button id="1" onClick={handleClick}>Player 1</button>
                    <button id="2" onClick={handleClick}>Player 2</button>
                    <button id="3" onClick={handleClick}>Player 3</button>
                </Option>
            </Element>
        </Wrapper>
    )
}

export default Workspace;

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;

    widht: 100vw;
    height: 100vh;
    background: #1B2D2A;
    
`;
// background:white;

const Element = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    
    height:100vh;
    min-width: 70vw;

    transition: 1s ease-in;

    canvas {
        transition: 1s ease-in;
    }
`;

const Option = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    height:max-content;

    button {
        border-radius: 100rem;
        padding: 1rem;
        font-family: "Avenir Next";
        font-size: 1rem;
        padding: 0.5rem 3rem;
        margin: 1em;
        color: #000000;
        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
        border: solid 3px transparent;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
        ),
        linear-gradient(101deg, #78e4ff, #ff48fa);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 2px 1000px 1px #fff inset;

        transition: 150ms ease-in;

        &:hover {
            box-shadow: none;
            color: white;

        }

    }
`;
