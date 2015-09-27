console.log('List');

/**
 * 列表类
 */
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

/**
 * append 在列表末尾添加元素
 * @param  {element} element 要添加的元素
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}

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

/**
 * length 元素个数
 * @return {Number} 列表长度
 */
function length() {
    return this.listSize;
}

/**
 * toString
 * @return {Array} 显示当前列表
 */
function toString() {
    return this.dataStore;
}

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

/**
 * clear 清空
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

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


// test
var list = new List();
list.append(8);
list.append(9);
list.append('gao');
list.append('ying');


console.log(list.find(8));
console.log(list.find('gao'));
console.log('listSize-->' + list.length());
console.log(list.remove('gao'));
console.log('listSize-->' + list.length());
console.log(list.toString());
list.insert('gaohaoyang', 9);
console.log(list.toString());

list.front();
console.log(list.getElement());
list.next();
console.log(list.getElement());
list.next();
list.next();
list.prev();
console.log(list.getElement());
console.log(list.currPos());
console.log(list.length());
list.next();
console.log(list.currPos());
// 使用迭代器访问列表
// for (list.front(); list.currPos() < list.length(); list.next()) {
//     console.log(list.getElement());
// }