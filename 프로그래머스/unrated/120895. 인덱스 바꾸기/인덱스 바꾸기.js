function swap(arr, num1, num2) {
    let memo = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = memo;
    return arr;
};

function solution(str, num1, num2) {
    const arr = str.split("");
    return swap(arr, num1, num2).join("");
}