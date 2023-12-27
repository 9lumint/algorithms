function solution(n, lost, reserve) {
  const l = lost.filter((e) => !reserve.includes(e)).sort((a, b) => a - b);
  const r = reserve.filter((e) => !lost.includes(e)).sort((a, b) => b - a);

  const arr = l.filter((e) => {
    if (r.includes(e + 1) && r.includes(e - 1)) {
      return true;
    } else if (r.includes(e + 1) || r.includes(e - 1)) {
      r[r.indexOf(e + 1) >= 0 ? r.indexOf(e + 1) : r.indexOf(e - 1)] = null;
      return false;
    }
    return true;
  });

  return n - arr.filter((e) => {
      if (r.includes(e + 1) || r.includes(e - 1)) {
        r[r.indexOf(e + 1) >= 0 ? r.indexOf(e + 1) : r.indexOf(e - 1)] = null;
        return false;
      }
      return true;
    }).length;
}