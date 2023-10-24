function solution(my_string) {
    const cal = my_string.split(' ');
    let answer = +cal[0], i = 1;
    while(i < cal.length){
        cal[i] === '+' ? answer += +cal[i + 1] : answer -= +cal[i + 1];
        i += 2;
    }
    return answer;
}