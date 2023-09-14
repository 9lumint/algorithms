function solution(code) {
    let mode = 0, ret = "";
    for(let i = 0; i < code.length; i++){
        if(code[i] === "1"){
            mode = mode ? 0 : 1; 
        } else {
            if((!mode && !(i % 2)) || (mode && i % 2)){
                ret += code[i];
            }
        }
    }
    return ret.length ? ret : "EMPTY";
}