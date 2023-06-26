// 1. 키: 숫자 영단어(one), 값: 숫자(1)인 객체(nums)를 생성한다.
// 2. 인자로 받은 s를 순회해 문자일 경우 해당 문자를 memo라는 빈 문자열 안에 더해 조합한다(이때 s의 i 번째 인덱스 문자가 0일 경우 falsy한 값으로 인식되므로 해당 경우를 제외하는 조건 추가 필요).
// 3. 조합한 문자가 nums 안에 포함되어 있을 경우 replace를 이용해 숫자 영단어를 숫자로 대체한 후(nums를 바탕으로) 대체한 상태의 문자열을 answer에 재할당한다.
// 4. 반복문 종료 후 변환된 문자열 answer를 반환한다.

function solution(s) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let memo = "",
    answer = s;
  for (let i = 0; i < s.length; i++) {
    if (!Number(s[i]) && Number(s[i]) !== 0) {
      memo += s[i];
    }
    if (nums[memo] !== undefined) {
      answer = answer.replace(memo, nums[memo]);
      memo = "";
    }
  }
  return Number(answer);
}