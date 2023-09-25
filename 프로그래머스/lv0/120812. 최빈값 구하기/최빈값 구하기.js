function solution(array) {
  const map = new Map();
  const maxArray = [];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
    if (map.get(array[i]) > max) {
      max = map.get(array[i]);
    }
  }
  map.forEach((v, k) => {
    v === max ? maxArray.push(k) : null;
  });
  return maxArray.length === 1 ? maxArray[0] : -1;
}