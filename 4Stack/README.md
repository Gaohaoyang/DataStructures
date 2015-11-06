# 第4章 栈

上一章讲到的列表，适用于元素不多，不需要在很长的序列中查找元素，或者排序的情况。如果数据结构非常复杂，列表的作用就没那么大了。

栈和列表类似。但是栈是一种高效的数据结构，因为数据只能在栈顶添加或者删除，这样操作很快，容易实现。

## 4.1 对栈的操作

栈是一种特殊的列表，栈内的元素只能通过列表的一端进行访问，这一端叫做栈顶。

被称为后入先出的数据结构。Last in first out, LIFO.

任何不在栈顶的元素都无法访问，为了得到栈底的元素，必须先拿掉上面的元素。

对栈的操作主要有压入（push）和弹出（pop）。

另一个操作是预览栈顶（peek），不弹出元素。

还有 clear 方法，length 属性。

## 4.2 栈的实现

使用数组实现栈的底层数据结构。

Stack 类的构造函数。

```js
/**
 * 栈的构造函数
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

/**
 * push 入栈
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function push(element) {
    this.dataStore[this.top++] = element;
    // 注意++的位置，在top之后，元素先放到当前top的位置，然后top再++
}

/**
 * pop 出栈
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function pop(element) {
    return this.dataStore[--this.top];
    // 将 top 减小1并赋值给自己（出栈），再将这个值返回
}

/**
 * peek 栈顶元素
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function peek(element) {
    return this.dataStore[this.top - 1];
    // 返回 top-1 的栈顶元素
}

/**
 * 栈的长度
 * @return {[type]} [description]
 */
function length() {
    return this.top;
    // 返回栈顶的位置，top 是从0开始计算的。
}

/**
 * 清空栈
 * @return {[type]} [description]
 */
function clear() {
    this.top = 0;
    // 将 top 赋值为0，清空一个栈。
}

///////////////////////////////////////////
//-----------------test----------------- //
///////////////////////////////////////////

var s = new Stack();

s.push('dog');
s.push('cat');
s.push('apple');

console.log(s.peek()); // apple
console.log(s.length()); // 3
console.log(s.pop()); // apple
console.log(s.peek()); // cat
```

## 4.3 使用 Stack 类

有些问题特别适合使用栈去解决，举几个例子。

### 4.3.1 数制间的相互转换

想将数字 n 转换为以 b 为基数的数字，实现转换的算法如下。

算法思路：

1. 最高位为 n%b，将此位压入栈。
2. 使用 n/b 代替 n。
3. 重复步骤 1 和 2，直到 n 等于 0，且没有余数。
4. 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符串形式。

> **此算法只针对基数为 2-9 的情况。**

```js
/////////////////////
// 数制间的相互转换 //
/////////////////////

/**
 * 数制间的相互转换
 * @param  {Number} num  数字
 * @param  {Number} base 基数
 * @return {String}      转换后的数字字符串
 */
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

///////////////////
//-----test----- //
///////////////////

console.log(mulBase(7, 2)); // 111
```

### 4.3.2 回文

判断一个字符串是否是回文。

使用栈可以轻松完成，将一个字符串依次入栈，完成后，再依次弹出，组成新的字符串，这个字符串刚好是原始字符串的反转。比较两个字符串即可。

```js
///////////////////
//-----回文----- //
///////////////////

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = '';
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (rword == word) {
        return true;
    } else {
        return false;
    }
}

///////////////////
//-----test----- //
///////////////////

console.log(isPalindrome('123321')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('123')); // false
```

### 4.3.3 递归演示

这里使用栈模拟阶乘。

```js
/**
 * 递归的原始写法
 * @param  {Number} n 数字
 * @return {Number}   结果
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

这里使用栈模拟递归，首先将数字5到1压入栈，然后使用一个循环，将数字挨个弹出，得到结果。

```js
/**
 * 栈模拟递归
 * @param  {Number} n 数字
 * @return {Number}   结果
 */
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

///////////////////
//-----test----- //
///////////////////

console.log(fact(5)); //120
console.log(factorial(5)); //120
```

## 4.4 练习

有空会补上的。

---

[上一章 第3章 列表](../3List)

[下一章 第5章 队列](../5Queue)