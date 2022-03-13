/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nathang30 (https://sketchfab.com/Nathang30)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/iron-man-mark-1-57b18282c1a84c5899fcc7f67762a386
title: Iron Man - Mark 1
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mark1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.35} position={[0,-2.3,0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group castShadow={true} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.first_protection_leather} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Reactor} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Plastic} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.metal_box} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.gas_cylinder} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.strap} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.second_protection_Iron} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.glove} />
            <mesh geometry={nodes.Object_13.geometry} material={materials.pipe} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mark1.gltf')