/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: André Bray (https://sketchfab.com/masterbray)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/rocky-ground-2de202dfe8014b6cac6ea23ebbbb55ad
title: Rocky Ground
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF('/rockyGround.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
          <group position={[0.65, -4.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Plane001__0.geometry} material={nodes.Plane001__0.material} />
            <mesh geometry={nodes.Plane001__0_1.geometry} material={nodes.Plane001__0_1.material} />
            <mesh geometry={nodes.Plane001__0_2.geometry} material={nodes.Plane001__0_2.material} />
            <mesh geometry={nodes.Plane001__0_3.geometry} material={nodes.Plane001__0_3.material} />
            <mesh geometry={nodes.Plane001__0_4.geometry} material={nodes.Plane001__0_4.material} />
            <mesh geometry={nodes.Plane001__0_5.geometry} material={nodes.Plane001__0_5.material} />
            <mesh geometry={nodes.Plane001__0_6.geometry} material={nodes.Plane001__0_6.material} />
            <mesh geometry={nodes.Plane001__0_7.geometry} material={nodes.Plane001__0_7.material} />
            <mesh geometry={nodes.Plane001__0_8.geometry} material={nodes.Plane001__0_8.material} />
            <mesh geometry={nodes.Plane001__0_9.geometry} material={nodes.Plane001__0_9.material} />
            <mesh geometry={nodes.Plane001__0_10.geometry} material={nodes.Plane001__0_10.material} />
            <mesh geometry={nodes.Plane001__0_11.geometry} material={nodes.Plane001__0_11.material} />
            <mesh geometry={nodes.Plane001__0_12.geometry} material={nodes.Plane001__0_12.material} />
            <mesh geometry={nodes.Plane001__0_13.geometry} material={nodes.Plane001__0_13.material} />
            <mesh geometry={nodes.Plane001__0_14.geometry} material={nodes.Plane001__0_14.material} />
            <mesh geometry={nodes.Plane001__0_15.geometry} material={nodes.Plane001__0_15.material} />
            <mesh geometry={nodes.Plane001__0_16.geometry} material={nodes.Plane001__0_16.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/rockyGround.gltf')
