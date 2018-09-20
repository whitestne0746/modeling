function calCrossLength(w = 10, h = 10, sideLogLength = 10, rad = Math.PI / 6) {
  let l = w + (Math.sin(rad) * sideLogLength) / 2;
  let L = Math.sqrt(h * h + l * l);
  return L;
}

console.log(calCrossLength());
