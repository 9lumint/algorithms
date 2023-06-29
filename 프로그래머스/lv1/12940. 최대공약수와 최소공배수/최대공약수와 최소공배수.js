function mod(n, m) {
    return m ? mod(m, n % m) : n;
}

function solution(n, m) {
   let big = mod(Math.max(n, m), Math.min(n, m)), small = n * m  / big;    
    return [big, small];
}