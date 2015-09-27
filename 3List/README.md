# 第3章 列表

## 3.1 列表的抽象数据类型定义

列表是一组有序的数组。列表中的元素可以是任意数据类型。元素数量受到程序内存限定。

不包含任何元素的列表称为空列表。

列表有描述元素位置的属性。列表有前有后。

列表的抽象数据类型并未指明列表的存储结构，我们使用数组来存储元素。

* 列表的属性
    
    名称 | 描述
    --- | ---
    listSize | 列表的元素个数
    pos | 列表的当前位置
    length | 返回列表中元素的个数

* 列表的方法

    名称 | 描述
    ---|---
    clear | 清空列表中的所有元素
    toString | 返回列表的字符串形式
    getElement | 返回当前位置的元素
    insert | 在现有元素后插入新元素
    append | 在列表的末尾添加新元素
    remove | 从列表中删除元素
    front | 将列表的当前位置移动到第一个元素
    end | 将列表的当前位置移动到最后一个元素
    prev | 将当前位置后移一位
    next | 将当前位置前移一位
    currPos | 返回列表的当前位置
    moveTo | 将当前位置移动到指定位置


## 3.2 实现列表类

```js
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.getElement = getElement;
    this.contains = contains;
}
```

### 3.2.1 append：给列表添加元素

```js
/**
 * append 在列表末尾添加元素
 * @param  {element} element 要添加的元素
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}
```

### 3.2.2 find：在列表中查找某一元素

```js
/**
 * find 查找元素
 * @param  {element} element 要查找的元素
 * @return {Number}         查到，返回索引；未查到，返回-1
 */
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
```

### 3.2.3 remove：从列表中删除元素

`remove()` 使用 `find()` 方法返回的位置对数组 dateStore 进行截取。数组改变后，将变量 listSize 的值减 1，以反映列表的最新长度。

```js
/**
 * remove 删除元素
 * @param  {element} element 要删除的元素
 * @return {Boolean}         删除成功，返回 true，不成功返回 false
 */
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}
```

### 3.2.4 length：列表中有多少个元素

```js
/**
 * length 元素个数
 * @return {Number} 列表长度
 */
function length() {
    return this.listSize;
}
```

### 3.2.5 toString：显示列表中的元素

```js
/**
 * toString
 * @return {Array} 显示当前列表
 */
function toString() {
    return this.dataStore;
}
```

### 3.2.6 insert：向列表中插入一个元素

先找到位置，再使用 `splice()` 操作，同时 `listSize` 加1。

```js
/**
 * insert 插入
 * @param  {element} element 待插入的元素
 * @param  {element} after   在after之后插入元素
 * @return {Boolean}         插入成功，true，不成功false
 */
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}
```

### 3.2.7 clear：清空列表中所有的元素

```js
/**
 * clear 清空
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
```

### 3.2.8 contains：判断给定值是否在列表中

```js
/**
 * contains 是否包含
 * @param  {element} element 查找的元素
 * @return {Boolean}
 */
function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
```

### 3.2.9 遍历列表

```js
/**
 * front
 */
function front() {
    this.pos = 0;
}

/**
 * end
 */
function end() {
    this.pos = this.listSize - 1;
}

function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}

function prev() {
    if (this.pos > -1) {
        this.pos--;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(postion) {
    this.pos = postion;
}

function getElement() {
    return this.dataStore[this.pos];
}
```

## 3.3 使用迭代器访问列表



## 3.4 一个基于列表的应用

## 3.5 练习
