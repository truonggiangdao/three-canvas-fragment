import React from 'react';

import { extend, useThree } from '@react-three/fiber';

import { OrbitControls } from './OrbitControls';

extend({ OrbitControls });

function Controls(props) {
  const { camera, gl } = useThree();

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      {...props} />
  );
}

export default Controls;
