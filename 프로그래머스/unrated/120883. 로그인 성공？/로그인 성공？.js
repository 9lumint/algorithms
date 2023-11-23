function solution(id_pw, db) {
    let answer = "fail";
    for(let i = 0; i < db.length; i++){
        if(id_pw[0] === db[i][0]){
            answer = "wrong pw";
            if(id_pw[1] === db[i][1]){
                return "login"
            }
        }
    }
    return answer;
}