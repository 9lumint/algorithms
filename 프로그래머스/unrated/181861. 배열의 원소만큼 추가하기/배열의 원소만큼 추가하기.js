function solution(arr) {
  return arr.reduce((a, c) => {
    return [...a, ...Array(c).fill(c)];
  }, []);
}