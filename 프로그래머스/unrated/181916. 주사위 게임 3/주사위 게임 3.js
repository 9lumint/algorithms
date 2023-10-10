function solution(a, b, c, d) {
  const dice = [...new Set([a, b, c, d])];
  switch (dice.length) {
    case 1:
      return dice[0] * 1111;
    case 2:
      const arr = [...arguments].sort((a, b) => a - b);
      let count = 1,
        triple,
        one;
      for (let i = 1; i < arr.length; i++) {
        arr[0] === arr[i] ? count++ : null;
      }
      triple = count === 3 ? arr[0] : arr[3];
      one = count === 1 ? arr[0] : arr[3];
      return count === 2
        ? (dice[0] + dice[1]) * Math.abs(dice[0] - dice[1])
        : (10 * triple + one) ** 2;
    case 3:
      let answer = 1;
      [...arguments].forEach((e) => {
        if ([...arguments].indexOf(e) === [...arguments].lastIndexOf(e)) {
          answer *= e;
        }
      });
      return answer;
    case 4:
      return Math.min(a, b, c, d);
  }
}