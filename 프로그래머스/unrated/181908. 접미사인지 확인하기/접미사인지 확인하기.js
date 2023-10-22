function solution(my_string, is_suffix) {
    return Array.from(my_string).map((_, idx) => my_string.slice(idx)).includes(is_suffix) ? 1 : 0;
}