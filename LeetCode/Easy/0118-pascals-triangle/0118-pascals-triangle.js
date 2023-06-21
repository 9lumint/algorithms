/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 1. 2차원 배열인 pascal을 생성한다.
// 2. 해당 배열의 모든 요소의 0 번째는 1로 시작하도록 요소를 미리 삽입한 배열을 pascal에 삽입한다.
// 3. 이중 반복문을 이용해 이전 요소 배열의 연이은 요소를 두 개씩 더한 값을 해당 차례 요소 배열에 삽입한다.
// 4. 반복문 종료 후 pascal을 반환한다.

const generate = function(numRows) {
    const pascal = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [1];
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }
        pascal[i][i] = 1;
    }
    return pascal;
};