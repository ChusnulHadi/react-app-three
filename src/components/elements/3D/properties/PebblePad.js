/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ChimnyMan (https://sketchfab.com/ChimnyMan)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/week-4-pebble-pad-37fa33db47f94d6aabcdfa234acfd14a
title: Week 4 Pebble Pad
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pebblePad.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group  rotation={[-Math.PI / 2, 0, 0]} scale={0.0075} position={[0,-5.875,0]} >
        <mesh receiveShadow geometry={nodes.Object_2.geometry} material={materials.wire_006135006} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.wire_135059008} />
        <mesh  visible={false} geometry={nodes.Object_4.geometry} material={materials.wire_143225087} />
      </group>
    </group>
  )
}

useGLTF.preload('/pebblePad.gltf')
