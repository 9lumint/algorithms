function solution(myStr) {
    const filter = ["a", "b", "c"];
    const answer = [...myStr].map(el => filter.includes(el) ? " " : el).join("").split(" ").filter(el => el);
    return answer.length ? answer : ["EMPTY"];
}