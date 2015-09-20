/**
 * 深复制
 * @param  {Array} arr1 已知数组
 * @param  {Array} arr2 新数组
 */
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}

var nums = [1, 2, 3];
var samenums = [];
copy(nums, samenums);
console.log(samenums);

var nums = [1, 2, 5, 6];
nums.splice(2, 0, 3, 4);
console.log(nums); // [1, 2, 3, 4, 5, 6]

nums.splice(1, 2);
console.log(nums); // [1, 4, 5, 6]

for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// 比较函数
function compare(n1, n2) {
    return n1 - n2;
}
var nums = [3, 2, 100, 15, 6];
console.log(nums.sort(compare)); // [2, 3, 6, 15, 100]



function square(n) {
    console.log(n, n * n);
}
var nums = [1, 2, 3, 4, 5, 6, 7];
nums.forEach(square);
/*
1 1
2 4
3 9
4 16
5 25
6 36
7 49
*/

function isEven(n) {
    return n % 2 === 0;
}
var nums = [2,4,6,8,10];
console.log(nums.every(isEven)); // true
var nums = [2,4,6,8,1];
console.log(nums.every(isEven)); // false

var nums = [1,3,5,7,9];
console.log(nums.some(isEven)); // false
var nums = [2,3,5,7,9];
console.log(nums.some(isEven)); // true