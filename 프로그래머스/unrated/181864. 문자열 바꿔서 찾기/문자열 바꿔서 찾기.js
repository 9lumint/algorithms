function solution(myString, pat) {
    return +[...myString].map(el => "A" === el ? "B" : "A").join("").includes(pat);
}