function solution(spell, dic) {
  for (let el of dic) {
    for (let i = 0; i < spell.length; i++) {
      if (
        el.indexOf(spell[i]) === -1 ||
        el.indexOf(spell[i]) !== el.lastIndexOf(spell[i])
      ) {
        break;
      }
      if (i === spell.length - 1) {
        return 1;
      }
    }
  }
  return 2;
}