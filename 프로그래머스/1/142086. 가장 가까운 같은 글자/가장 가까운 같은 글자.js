function solution(s) {
  let map = new Map();
  return [...s].map((e, i) => {
    let idx = map.get(e);
    map.set(e, i);
    return idx === undefined ? -1 : i - idx;
  });
}