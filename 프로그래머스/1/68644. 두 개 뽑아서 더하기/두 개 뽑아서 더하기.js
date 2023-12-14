function solution(numbers) {
    const set = new Set();
    for(let i = 0; i < numbers.length - 1; i++){
        for(let k = i + 1; k < numbers.length; k++){
            set.add(numbers[i] + numbers[k]);
        }
    }
    return [...set].sort((a, b) => a - b);
}