function solution(my_strings, parts) {
    return parts.map((el, idx) => my_strings[idx].slice(el[0], el[1] + 1)).join('');
}