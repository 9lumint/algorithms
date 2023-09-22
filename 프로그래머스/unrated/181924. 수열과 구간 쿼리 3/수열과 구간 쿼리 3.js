function solution(arr, queries) {
    let memo;
    for(let i = 0; i < queries.length; i++){
        memo = arr[queries[i][0]];
        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = memo;
    }
    return arr;
}