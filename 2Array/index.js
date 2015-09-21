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
    return (n, n * n);
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var nums2 = nums.map(square);
console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
console.log(nums2); // [1, 4, 9, 16, 25, 36, 49]


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
var nums = [2, 4, 6, 8, 10];
console.log(nums.every(isEven)); // true
var nums = [2, 4, 6, 8, 1];
console.log(nums.every(isEven)); // false

var nums = [1, 3, 5, 7, 9];
console.log(nums.some(isEven)); // false
var nums = [2, 3, 5, 7, 9];
console.log(nums.some(isEven)); // true

function add(n1, n2) {
    return n1 + n2;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.reduce(add)); // 55

// 对于字符串数组，可以连接
var strArr = ['I', 'Love', 'Ying', 'ying'];
console.log(strArr.reduce(add)); // ILoveYingying


var two = [];
var rows = 5;
for (var i = 0; i < rows; i++) {
    two[i] = [];
}

/**
 * 定义二维数组
 * @param  {Number} numrows 行数
 * @param  {Number} numcols 列数
 * @param  {Any}    initial 初始值
 * @return {Array}          二维数组
 */
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; i++) {
        var columns = [];
        for (var j = 0; j < numcols; j++) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};

// test
var nums = Array.matrix(3, 3, 1);
for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums[i].length; j++) {
        console.log(nums[i][j]);
    }
}
test