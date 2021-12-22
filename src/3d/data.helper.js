import data from './data.json';

const sides = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];
export const getImgForSide = (side) => {
  const i = sides.indexOf(side);
  return {
    size1024: data.cubeMapImages.size1024[i],
    size2048: data.cubeMapImages.size2048[i],
    size1024_f4: data.cubeMapImages.size1024_f4[side],
    size1024_f16: data.cubeMapImages.size1024_f16[side],
  }
};
