function solution(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr[0].length; k++){
            if(i !== k && arr[i][k] !== arr[k][i]){
                return 0;
            }
        }
    }
    return 1;
}