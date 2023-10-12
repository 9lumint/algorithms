function solution(my_string, queries) {
    const arr = my_string.split('');
    for(let [a, b] of queries){
        while(b - a > 0){
            let memo = arr[a];
            arr[a] = arr[b];
            arr[b] = memo;
            a++;
            b--;
        }
    }
    return arr.join('');
}