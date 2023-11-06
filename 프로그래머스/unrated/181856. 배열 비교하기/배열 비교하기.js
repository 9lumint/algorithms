function sum(arr) {
    return arr.reduce((a, c) => a + c, 0);
};

function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        return sum(arr1) === sum(arr2) ? 0 : sum(arr1) > sum(arr2) ? 1 : -1;
    }
    return arr1.length > arr2.length ? 1 : -1;
}