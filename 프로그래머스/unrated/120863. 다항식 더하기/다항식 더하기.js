function solution(polynomial) {
  let x = 0,
    num = 0;
  polynomial
    .split(" + ")
    .forEach((el) =>
      el.endsWith("x")
        ? el === "x"
          ? x++
          : (x += +el.slice(0, -1))
        : (num += +el)
    );
  return !num
    ? `${x === 1 ? "" : x}x`
    : !x
    ? `${num}`
    : `${x === 1 ? "" : x}x + ${num}`;
}