import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Link } from 'react-scroll';
import styled from "styled-components"
// import Button from "./elements/Button"
// import Box from "./elements/3D/Box"
import AnimatedSphere from "./elements/3D/AnimatedSphere"

const Frame = () => {
    return (
        <Wrapper id="page1">
            <div>
                <Title>Introduction</Title>
                <Text>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec dignissim quis massa vel efficitur.
                    Etiam vitae quam nunc. Quisque risus lectus, fringilla vel diam sit.
                </Text>
                <Button >
                    <Link to="page2" smooth={true} >
                        Get In Touch
                    </Link>
                </Button>
            </div>
            <Canvas>
                <spotLight position={[-15, 5, -5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[15, -5, 5]}
                    intensity={1} />

                <OrbitControls enableZoom={false} />

                <AnimatedSphere />
                {/* <Box /> */}
            </Canvas>
        </Wrapper>
    )
}

export default Frame;

const Wrapper = styled.div`
    background: rgba(234, 234, 234, 0.52);
    box-shadow: 10px 10px 20px rgba(72, 72, 72, 0.6);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 50px;

    width: 1170px;
    height: 40em;
    max-height: 80vh;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding: 0 3.5em;
    margin-top: 10vh;
`;

const Title = styled.h1`
    font-family: rubik;
    font-size: 5em;

    margin: 0.5em 0;
`;

const Text = styled.p`
    font-family: rubik;
    font-size: 1.5em;

    margin-top: 1em;

    width: 50%;
`;

const Button = styled.button`
    border-radius: 100rem;
    padding: 1rem;
    font-family: "Avenir Next";
    font-size: 1rem;
    padding: 0.5rem 3rem;
    margin: 1em auto;
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

    &:hover {
        box-shadow: none;
        color: white;
    }
`;