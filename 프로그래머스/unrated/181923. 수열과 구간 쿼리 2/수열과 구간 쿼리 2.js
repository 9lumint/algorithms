function solution(arr, queries) {
    return queries.map((el) => {
        let [start, end, max] = el, answer = [];
        for(let i = start; i <= end; i++){
            if(arr[i] > max){
                answer.push(arr[i]);
            }
        }
        return answer.length ? Math.min(...answer) : -1;
    })
}