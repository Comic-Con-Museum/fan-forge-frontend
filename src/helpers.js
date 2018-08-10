export function elementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.x + rect.width) < 0 
      || (rect.y + rect.height) < 0
      || (rect.x > window.innerWidth || rect.y > window.innerHeight)
  );
}

export function clean(obj) {
  for (var propName in obj) { 
    if (obj[propName] === '' || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}