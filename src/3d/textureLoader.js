import { useState, useEffect, useCallback } from 'react';
import { Texture, CanvasTexture } from 'three';
import { useThree } from '@react-three/fiber';
import { loadCanvasImage } from './canvas.helper';

const calcFrag = fov => {
  if (fov < 30) return 16;
  if (fov < 50) return 4;
  return 1;
};

export const useTextureLoad = (imageData = { size1024: '', size1024_f4: [''], size1024_f16: [''] }) => {
  const [texture, setTexture] = useState(new Texture());
  const [curFrag, setCurFrag] = useState(1);
  const { camera } = useThree();
  const fov = camera.fov;

  useEffect(() => {
    const frag = calcFrag(fov);
    if (frag !== curFrag) {
      setCurFrag(frag);
    }
    console.log('curr fov', fov);
  }, [curFrag, fov]);

  const updateTexture = useCallback((cvTexture) => {
    const newTexture = new CanvasTexture(cvTexture);
    newTexture.repeat.set(1, 1);
    setTexture(newTexture);
  }, []);


  useEffect(() => {
    const loadImg = async () => {
      const canvas = await loadCanvasImage(imageData, 4);
      updateTexture(canvas);
    };

    loadImg();
  }, [imageData, curFrag, updateTexture])

  return texture;
}
