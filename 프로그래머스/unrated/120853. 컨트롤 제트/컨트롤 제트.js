function solution(s) {
    const str = s.split(" ");
    return str.map((el, idx) => (isNaN(+el) ? -str[idx - 1] : +el)).reduce((a, c) => a + c);
}