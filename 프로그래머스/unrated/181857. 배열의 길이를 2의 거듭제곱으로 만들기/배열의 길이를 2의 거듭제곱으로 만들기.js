function solution(arr, num = 1) {
    while(num < arr.length){
        num *= 2;
    }
    return num - arr.length <= 0 ? arr : [...arr, ...Array(num - arr.length).fill(0)];
}