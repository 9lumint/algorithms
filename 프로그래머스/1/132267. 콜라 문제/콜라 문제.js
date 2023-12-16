function solution(a, b, n) {
  let cola = [], i = 0;
  while (n >= a) {
    cola[i] = Math.floor(n / a) * b;
    n = Math.floor(n % a) + cola[i];
    i++;
  }
  return cola.reduce((acc, cur) => acc + cur);
}