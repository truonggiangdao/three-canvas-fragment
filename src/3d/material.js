import React, { useMemo } from 'react';
import { BackSide } from 'three';
import { getImgForSide } from './data.helper';
import { useTextureLoad } from './textureLoader';

export default ({ side, ...props }) => {
  const imgData = useMemo(() => {
    return getImgForSide(side);
  }, [side]);
  const texture = useTextureLoad(imgData);
  return (
    <meshStandardMaterial {...props} map={texture} side={BackSide} />
  )
}