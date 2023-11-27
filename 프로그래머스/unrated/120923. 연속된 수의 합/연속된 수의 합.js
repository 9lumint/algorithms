function solution(num, total) {
    return Array(num).fill((total - (num * ((num - 1) / 2))) / num).map((e, i) => e + i);
}