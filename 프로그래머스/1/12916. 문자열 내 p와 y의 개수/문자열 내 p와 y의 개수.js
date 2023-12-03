function solution(s){
    let str = s.toLowerCase();
    return str.split("y").length === str.split("p").length;
}