function solution(num_list) {
    let lastIdx = num_list.length;
    num_list[lastIdx] = num_list[lastIdx - 1] > num_list[lastIdx - 2] ? num_list[lastIdx - 1] - num_list[lastIdx - 2] : num_list[lastIdx - 1] * 2;
    return num_list;
}