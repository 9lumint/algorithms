function solution(s, n) {
  return [...s]
    .map((e) =>
      e !== " "
        ? String.fromCharCode(
            e.charCodeAt() +
              n -
              ((e.charCodeAt() + n > 90 && e.toUpperCase() === e) ||
              (e.charCodeAt() + n > 122 && e.toLowerCase() === e)
                ? 26
                : 0)
          )
        : " "
    )
    .join("");
}
