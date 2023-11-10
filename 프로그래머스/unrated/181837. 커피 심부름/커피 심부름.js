function solution(order) {
  return order.reduce(
    (a, c) => a + (c.endsWith("o") || c.startsWith("a") ? 4500 : 5000),
    0
  );
}