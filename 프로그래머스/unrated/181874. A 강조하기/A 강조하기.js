function solution(myString) {
    return [...myString].map(el => el === "a" ? "A" : el === "A" ? el : el.toLowerCase()).join("");
}