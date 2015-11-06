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