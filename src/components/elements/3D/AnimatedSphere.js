import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {


    return (
        <Sphere
            args={[1, 100, 100]}
            scale={2}
        >
            <MeshDistortMaterial
                color='#8c00bf'
                distort={0.5}
                attach="material"
                speed={1}
                roughness={0.5}
            />

        </Sphere>
    );
}

export default AnimatedSphere;