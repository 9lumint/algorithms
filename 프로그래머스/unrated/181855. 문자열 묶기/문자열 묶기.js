function solution(strArr) {
    const answer = [];
    strArr.forEach(el => answer[el.length] = (answer[el.length] || 0) + 1);
    return answer.sort((a, b) => b - a)[0];
}