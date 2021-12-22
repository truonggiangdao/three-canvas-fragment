const CURRENT_CACHES = {
  IMG: 'img-cache'
};

export const fetchAndCacheImage = (url) => {
  return new Promise((resolve, reject) => {
    caches.open(CURRENT_CACHES.IMG)
      .then((cache) => {
        cache.match(url).then((response) => {
          // found in cache
          if (response) {
            return resolve(response);
          }
          // not found
          fetch(url).then(res => {
            cache.put(url, res.clone());
            return resolve(res);
          }).catch(err => {
            console.log('Cannot fetch from url ' + url);
            reject(err);
          })
        });
      })
      .catch(err => {
        console.log('Cannot open caches');
        reject(err);
      })
  })
}
// https://developer.mozilla.org/en-US/docs/Web/API/Cache