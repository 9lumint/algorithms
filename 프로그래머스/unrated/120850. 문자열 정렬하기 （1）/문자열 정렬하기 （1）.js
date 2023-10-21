function solution(my_string) {
    return my_string.split("").map(el => +el).filter(el => !(isNaN(el))).sort((a, b) => a - b);
}