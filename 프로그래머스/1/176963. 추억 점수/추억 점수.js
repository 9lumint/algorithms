function solution(name, yearning, photo) {
  return photo.map((e) =>
    e.reduce((a, c) => (yearning[name.indexOf(c)] || 0) + a, 0)
  );
}