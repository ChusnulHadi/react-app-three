/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Erroratten (https://sketchfab.com/erroratten)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/larger-resource-box-2c78d406b2a5426d975f0351f9759712
title: Larger Resource Box
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/resourceBox.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -0.3]} position={[0.25,-2.35,-1.3]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 50, 50]}>
            <mesh geometry={nodes.Box_box_0.geometry} material={materials.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/resourceBox.gltf')