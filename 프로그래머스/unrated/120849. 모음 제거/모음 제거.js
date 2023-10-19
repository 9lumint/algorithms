function solution(my_string) {
    const list = ["a", "e", "i", "o", "u"]
    return my_string.split("").filter(el => !(list.includes(el))).join("");
}