function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach(el => +el.slice(s, s + l) > k ? answer.push(+el.slice(s, s + l)) : null);
    return answer;
}