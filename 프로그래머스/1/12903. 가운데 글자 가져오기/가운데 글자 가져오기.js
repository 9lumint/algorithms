function solution(s) {
    return s.length % 2 ? s[(s.length - 1) / 2] : s.slice(Math.floor((s.length - 1) / 2), Math.ceil((s.length - 1) / 2) + 1);
}