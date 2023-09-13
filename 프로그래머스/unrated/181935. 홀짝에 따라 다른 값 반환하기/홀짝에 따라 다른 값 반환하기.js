function solution(n) {
    let odd = 1, even = 2, sum = 0;
    if(n % 2){
        while(odd <= n){
            sum += odd;
            odd += 2;
        }
    } else {
        while(even <= n){
            sum += even ** 2;
            even += 2;
        }
    }
    return sum;
}