function solution(my_string) {
    return my_string.split("").filter(el => !isNaN(+el)).reduce((a, c) => a + +c, 0);
}