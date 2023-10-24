function solution(arr, query) {
    query.forEach((el, i) => !(i % 2) ? arr.splice(el + 1) : arr.splice(0, el));
    return arr;
}