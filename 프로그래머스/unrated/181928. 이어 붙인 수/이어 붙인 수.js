function solution(num_list) {
    let odd = '', even = '';
    num_list.forEach((e) => {e % 2 ? odd += e : even += e})
    return +odd + +even;
}