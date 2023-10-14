function solution(numbers, direction) {
    return [...numbers.splice(direction === "right" ? -1 : 1), ...numbers];
}