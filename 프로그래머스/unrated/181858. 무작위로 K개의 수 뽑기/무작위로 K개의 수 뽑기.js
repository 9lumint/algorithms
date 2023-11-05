function solution(arr, k) {
    const answer = [...new Set(arr)].splice(0, k);
    return answer.length < k ? [...answer, ...Array(k - answer.length).fill(-1)] : answer;
}