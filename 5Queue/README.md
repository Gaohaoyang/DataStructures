# 第5章 队列

队列是一种列表，但只能从队尾插入元素，在队首删除元素。

先进先出的数据结构。FIFO，first in first out。

队列被用到很多地方，如：提交操作系统执行的一系列进程、打印任务池等，一些仿真系统用队列来模拟银行或杂货铺里排队的顾客。

## 5.1 队列的操作

主要有两种操作：入队，出队。

还有一种是读取队首元素 peek。

## 5.2 一个用数组实现的队列

数组中的 `push()` 方法可以在数组末尾加入元素，`shift()` 方法可以在删除数组的第一个元素。

```js
/**
 * 队列的构造函数
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; //入队
    this.dequeue = dequeue; //出队
    this.front = front; //读取队首元素
    this.back = back; //读取队尾元素
    this.toString = toString;
    this.isEmpty = isEmpty;
}

/**
 * 入队
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function enqueue(element) {
    this.dataStore.push(element);
}

/**
 * 出队
 * @return {[type]}         [description]
 */
function dequeue() {
    return this.dataStore.shift();
}

/**
 * 队首元素
 * @return {[type]} [description]
 */
function front() {
    return this.dataStore[0];
}

/**
 * 队尾元素
 * @return {[type]} [description]
 */
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

/**
 * toString
 * @return {[type]} [description]
 */
function toString() {
    var reStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i] + '\n';
    }
    return reStr;
}

/**
 * 判断是否为空
 * @return {Boolean} [description]
 */
function isEmpty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}


///////////////////
//-----test----- //
///////////////////

var q = new Queue();
console.log(q.isEmpty()); //true
q.enqueue('JavaScript');
q.enqueue('HTML');
q.enqueue('CSS');
console.log(q.toString());
console.log(q.dequeue()); //JavaScript
console.log(q.back()); //CSS
console.log(q.front()); //HTML
```

## 5.3 使用队列：方块舞的舞伴分配问题

## 5.4 使用队列对数据进行排序

原理：基数排序。

对于 0-99 的数字，基数排序将数据集扫描两次。第一次按个位上的数字进行排序，第二次按十位上的数字进行排序。



## 5.5 优先队列

## 5.6 练习