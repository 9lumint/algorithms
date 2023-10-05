function solution(arr, queries) {
    for(let el of queries){
        const [start, end, m] = el;
        for(let i = start; i <= end; i++){
            if(!(i % m)){
                arr[i] += 1;
            }
        }
    }
    return arr;
}