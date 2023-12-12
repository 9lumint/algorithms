function solution(s) {
    return s.split(" ").map(e => [...e].map((el, idx) => idx % 2 ? el.toLowerCase() : el.toUpperCase()).join("")).join(" ");
}