function solution(array) {
    let str1 = array.join('');
    return str1.length - str1.split('7').join('').length;
}