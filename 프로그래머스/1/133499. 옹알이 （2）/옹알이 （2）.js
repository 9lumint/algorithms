function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  return babbling.filter((e) => {
    for (let i = 0; i < list.length; i++) {
      if (e.includes(list[i].repeat(2))) {
        return false;
      }
    }
    for (let i = 0; i < list.length; i++) {
      e = e.split(list[i]).join("!");
    }
    return !e.split("!").join("").length;
  }).length;
}