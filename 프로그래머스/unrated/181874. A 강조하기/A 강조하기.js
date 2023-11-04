function solution(myString) {
    return [...myString].map(el => el === "a" || el === "A" ? "A" : el.toLowerCase()).join("");
}