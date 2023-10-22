function solution(array, n) {
    const arr = array.map(el => el - n).sort((a, b) => Math.abs(a) - Math.abs(b));
    return Math.abs(arr[0]) === Math.abs(arr[1]) ? Math.min(arr[0] + n, arr[1] + n) : arr[0] + n;
}