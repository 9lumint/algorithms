function solution(players, callings) {
  const map = new Map();
  for (let i = 0; i < players.length; i++) {
    map.set(players[i], i);
  }
  for (let i = 0; i < callings.length; i++) {
    let idx = map.get(callings[i]);
    map.set(players[idx], idx - 1).set(players[idx - 1], idx);
    [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
  }
  return players;
}