function solution(s1, s2) {
    const set = new Set(s1);
    let answer = 0;
    s2.forEach((el) => set.has(el) ? answer++ : null);
    return answer;
}