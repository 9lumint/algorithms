function solution(num_list) {
    return Number(num_list.reduce((a, c) => a * c) < num_list.reduce((a, c) => a + c) ** 2);
}