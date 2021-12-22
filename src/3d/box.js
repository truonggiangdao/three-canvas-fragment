import React, { useMemo } from 'react';
import MyMaterial from './material';

export default (props) => {
  const boxArgs = useMemo(() => ([1000, 1000, 1000, 1, 1, 1]), []);
  return (
    <mesh
      {...props}
      scale-x={-1}
    >
      <boxGeometry attach="geometry" args={boxArgs} />
      <MyMaterial attachArray="material" side={'px'} />
      <MyMaterial attachArray="material" side={'nx'} />
      <MyMaterial attachArray="material" side={'py'} />
      <MyMaterial attachArray="material" side={'ny'} />
      <MyMaterial attachArray="material" side={'pz'} />
      <MyMaterial attachArray="material" side={'nz'} />
    </mesh>
  )
}