function solution(emergency) {
    const answer = [...emergency]; 
    return answer.map(el => emergency.sort((a, b) => b - a).indexOf(el) + 1);
}