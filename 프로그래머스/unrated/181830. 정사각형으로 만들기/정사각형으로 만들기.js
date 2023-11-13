function solution(arr) {
  let col = arr.length, row = arr[0].length;
  if (row > col) {
    let i = 1;
    while (i++ <= row - col) {
      arr.push(Array(row).fill(0));
    }
    return arr;
  }
  return row === col
    ? arr
    : arr.map((el) => [...el, ...Array(col - row).fill(0)]);
}