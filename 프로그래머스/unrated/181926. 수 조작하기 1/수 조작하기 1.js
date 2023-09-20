function solution(n, control) {
    const con = new Map();
    for(let i = 0; i < control.length; i++){
        con.set(control[i], (con.get(control[i]) || 0) + 1)
    }
    return n + con.get("w") - con.get("s") + con.get("d") * 10 - con.get("a") * 10;
}