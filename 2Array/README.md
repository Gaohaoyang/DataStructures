# 第2章 数组

## 2.1 JavaScript 中对数组的定义

数组：一个存储元素的线性集合，元素可以通过索引来任意存取，索引通常为数字，用来计算元素之间存储位置的偏移量。

JavaScript 中的数组是一种特殊对象。其数字索引在内部被转换为字符串类型，因为 JavaScript 对象的属性名必须是字符串。因此效率不如其他语言的效率高。

但正因为是对象，有许多属性和方法可以在编程时使用。

## 2.2 使用数组

### 2.2.1 创建数组

    var arr1 = [];

    var arr2 = [1,2,3,4];

    var arr3 = new Array();

    var arr4 = new Array(1,2,3,4);

    var arr5 = new Array(4); // 数组长度

判断是否是数组

    Array.isArray(arr1);
    
推荐使用 `[]` 创建数组，被认为效率更高。

### 2.2.2 读写数组

使用 `[]` 进行赋值和读取。

### 2.2.3 由字符串生成数组

`split()` 将字符串分割为数组。

### 2.2.4 对数组的整体性操作

* 浅复制

    直接赋值，如下

        var nums = [1,2,3];
        var samenums = nums;

    被赋值的数组增加了一个新的引用。当改变原引用的值时，另一个引用也会感知变化。

* 深复制

    将原数组中的每一个元素都赋值一份到新数组中。

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

## 2.3 存取函数

### 2.3.1 查找元素

* `indexOf()` 用来查找传进来的参数在目标数组中是否存在。若存在，返回第一次出现的索引值，否则返回-1。

* `lastIndexOf()` 返回相同元素的最后一个索引。

### 2.3.2 数组中的字符串表示

`join()` 和 `toString()`

在直接打印数组时，系统会默认调用 `toString()`。

### 2.3.3 由已有数组创建新数组

* `concat()` 合并多个数组创建一个新数组。

* `slice()` 截取一个数组的子集创建一个新数组。参数为 (起始索引，截取长度)

## 2.4 可变函数

### 2.4.1 为数组添加元素

* `push()` 将一个元素添加到数组末尾。

    与添加到末尾相比，添加到开头更难。如果不使用 JavaScript 提供的可变函数，则新添加元素后，需要将每个元素都相应的向后移一个位置。

* `unshift()` 将元素添加到数组的开头。

### 2.4.2 从数组中删除元素

* `pop()` 删除数组末尾的元素。

    如果没有可变函数，删除第一个元素和添加一样，要移动整个数组，非常低效。

* `shift()` 删除数组的第一个元素。

`pop()` 和 `shift()` 都将删掉的元素作为返回值返回。

### 2.4.3 从数组中间位置添加和删除元素

这两种操作都要讲数组中的剩余元素向前或者向后移动，然而 `splice()` 提供了帮助。

`splice()` 3个参数

* 起始索引（希望开始添加元素的地方）
* 需要删除的元素个数（添加参数时该参数设为0）
* 想要添加进数组的元素

例：

    var nums = [1,2,5,6];
    nums.splice(2,0,3,4);
    console.log(nums); // [1, 2, 3, 4, 5, 6]

    nums.splice(1,2);
    console.log(nums); // [1, 4, 5, 6]


### 2.4.4 为数组排序

* `reverse()` 强数组中元素的顺序进行翻转。

* `sort()` 按照字典顺序对元素进行排序的。它假定元素都是字符串类型。

    比较函数，例：

        // 比较函数
        function compare(n1,n2) {
            return n1 - n2;
        }
        var nums = [3,2,100,15,6];
        console.log(nums.sort(compare)); // [2, 3, 6, 15, 100]

## 2.5 迭代器方法

对数组中的每一个元素应用一个函数，可以返回一个值、一组值或新数组。

### 2.5.1 不生成新数组的迭代器方法

* `forEach()` 参数为一个函数，对数组的每一个元素应用该函数。

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

* `every()` 接受一个返回值为布尔类型的函数，对数组中的每一个元素使用该函数。如果对于多有元素，改函数返回 `true`，则该方法返回 `true`。

        function isEven(n) {
            return n % 2 === 0;
        }
        var nums = [2,4,6,8,10];
        console.log(nums.every(isEven)); // true
        var nums = [2,4,6,8,1];
        console.log(nums.every(isEven)); // false

* `some()` 也接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回 `true`，该方法就返回 `true`。

        var nums = [1,3,5,7,9];
        console.log(nums.some(isEven)); // false
        var nums = [2,3,5,7,9];
        console.log(nums.some(isEven)); // true

* `reduce()` 参数接受一个函数，返回一个值。该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，知道数组中的最后一个元素，最后返回得到的累加值。

        function add(n1, n2) {
            return n1 + n2;
        }
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(nums.reduce(add)); // 55

        // 对于字符串数组，可以连接
        var strArr = ['I', 'Love', 'Ying', 'ying'];
        console.log(strArr.reduce(add)); // ILoveYingying

* `reduceRight()` 和 `reduce()` 方法不同的是，它是从右到左执行。

### 2.5.2 生成新数组的迭代器方法

`map()` 和 `filter()`

* `map()` 和 `forEach()` 有点像，却别是 `map()` 返回一个新数组，不改变原数组。

        function square(n) {
            return (n, n * n);
        }
        var nums = [1, 2, 3, 4, 5, 6, 7];
        var nums2 = nums.map(square);
        console.log(nums); // [1, 2, 3, 4, 5, 6, 7]
        console.log(nums2); // [1, 4, 9, 16, 25, 36, 49]

* `filter()` 和 `every()` 类似，传入一个返回值为布尔类型的函数。和 every() 不同的是，当对数组中的所有元素应用该函数，结果均为 true 时，该方法并不返回 true，而是返回一个新数组，该数组包含应用该函数后结果为 true 的元素。

    可以用于筛选奇数偶数，筛选成绩是否及格，过滤字符串数组滤掉指定单词。

## 2.6 二维数组和多维数组

JavaScript 只支持一维数组，二维数组使用数组里保存数组的方式实现。

### 2.6.1 创建二维数组

首先创建一个数组，然后让数组的每一个元素也是一个数组。至少要知道多少行，就可以创建一个 n 行 1 列的二维数组了。

    var two = [];
    var rows = 5;
    for (var i = 0; i < rows; i++) {
        two[i] = [];
    }

可以扩展 JavaScript 数组对象，为其增加一个方法，参数为行数、列数和初始值。

    /**
     * 定义二维数组
     * @param  {Number} numrows 行数
     * @param  {Number} numcols 列数
     * @param  {Any}    initial 初始值
     * @return {Array}          二维数组
     */
    Array.matrix = function(numrows,numcols,initial) {
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

### 2.6.2 处理二维数组的元素

最基本的方式有：按行访问和按列访问。

使用两个for循环处理。

### 2.6.3 参差不齐的数组

数组中每行的元素个数彼此不同。

使用 `.length` 属性可以得到数组长度，所以可以处理的很好。

## 2.7 对象数组

数组还可以包含对象，数组的方法和属性对对象依然适用。

## 2.8 对象中的数组

在对象中，可以使用数组存储复杂的数据。

## 2.9 练习


[上一章 第1章 JavaScript 的编程环境和模型](../1Environmnet and model)

[下一章 第3章 列表](../3List)