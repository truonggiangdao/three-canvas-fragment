const TYPE = 'image/jpeg';
export const loadImageData = (fileUrl, fileType = null) =>
  new Promise((resolve) => {
    if (fileUrl) {
      var fType = fileType || TYPE;
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0, img.width, img.height);
        resolve(canvas.toDataURL(fType));
      };
      img.onerror = function () {
        resolve(null);
      };
      img.src = fileUrl;
    } else {
      resolve(null);
    }
  });

  export const loadImage = (fileUrl) =>
  new Promise((resolve) => {
    if (fileUrl) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () {
        resolve(this);
      };
      img.onerror = function () {
        resolve(null);
      };
      img.src = fileUrl;
    } else {
      resolve(null);
    }
  });