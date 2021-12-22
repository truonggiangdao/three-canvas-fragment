import { loadImage } from "./image.helper";

const CANVAS_SIZE = 4096;
const IMAGE_SIZE = 1024;
const IMAGE_SIZE_4F = CANVAS_SIZE * 0.5;


const createCanvas = () => {
  const canvas = document.createElement('CANVAS');
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  // canvas.style.width = CANVAS_SIZE + 'px';
  // canvas.style.height = CANVAS_SIZE + 'px';

  return canvas;
};

const loadFragmentOf4 = async (imgUri, ctx, position = 0) => {
  const img = await loadImage(imgUri);
  const positions = [
    { x: 0, y: 0 },
    { x: 0.5, y: 0 },
    { x: 0, y: 0.5 },
    { x: 0.5, y: 0.5 },
  ];

  if (img) {
    ctx.drawImage(img, positions[position].x * CANVAS_SIZE, positions[position].y * CANVAS_SIZE, IMAGE_SIZE_4F, IMAGE_SIZE_4F);
  }
}

const loadFragmentOf16 = async (imgUri, ctx, position = 0) => {
  const img = await loadImage(imgUri);
  const positions = [
    { x: 0, y: 0 }, { x: 0.25, y: 0 }, { x: 0.5, y: 0 }, { x: 0.75, y: 0 },
    { x: 0, y: 0.25 }, { x: 0.25, y: 0.25 }, { x: 0.5, y: 0.25 }, { x: 0.75, y: 0.25 },
    { x: 0, y: 0.5 }, { x: 0.25, y: 0.5 }, { x: 0.5, y: 0.5 }, { x: 0.75, y: 0.5 },
    { x: 0, y: 0.75 }, { x: 0.25, y: 0.75 }, { x: 0.5, y: 0.75 }, { x: 0.75, y: 0.75 },
  ];

  if (img) {
    ctx.drawImage(img, positions[position].x * CANVAS_SIZE, positions[position].y * CANVAS_SIZE, IMAGE_SIZE, IMAGE_SIZE);
  }
}

export const loadCanvasImage = async (
  imageData = { size1024: '', size1024_f4: [''], size1024_f16: [''] },
  frag = 1,
  callback1 = null,
  callback2 = null,
  callback3 = null,
  ) => {
  const canvas = createCanvas();
  const ctx = canvas.getContext('2d');
  try {
    const img1024 = await loadImage(imageData.size1024);
    if (!img1024) return canvas;

    ctx.drawImage(img1024, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

    callback1 && callback1(canvas);

    if (frag > 1) {
      const requests = Array.from(Array(4).keys()).map(i => loadFragmentOf4(imageData.size1024_f4[i], ctx, i));
      await Promise.all(requests);

      callback2 && callback2(canvas);
    }

    if (frag > 4) {
      const requests = Array.from(Array(16).keys()).map(i => loadFragmentOf16(imageData.size1024_f16[i], ctx, i));
      await Promise.all(requests);

      callback3 && callback3(canvas);
    }
  } catch (err) {
    console.log(err, canvas);
  }

  return canvas;
};
