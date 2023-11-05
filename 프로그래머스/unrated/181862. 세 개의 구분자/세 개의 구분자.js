function solution(myStr) {
    const answer = myStr.split("a").join("b").split("b").join("c").split("c").filter(el => el);
    return answer.length ? answer : ["EMPTY"];
}