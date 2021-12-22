import React from 'react';
// import { OrbitControls } from '@react-three/drei';
import Canvas from './canvas';
import Box from './box';
import OrbitControls from './orbitControls';

export default () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[2, 2, 2]} />
    <Box position={[0, 0, 0]} />
    <OrbitControls
      enableDamping={true}
      rotateSpeed={-0.5}
      minZoom={20}
      maxZoom={130} />
  </Canvas>
);
