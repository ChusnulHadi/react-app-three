// import { boxBufferGeometry, meshLambertMaterial } from "three";
// import { useFrame } from "@react-three/fiber";
import React from "react";


const Box = () => {
    return (
        //mesh represent polygon object
        <mesh>
            <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
            <meshLambertMaterial attach="material" color="#fc21a1" />

        </mesh>
    );
    
}

export default Box;