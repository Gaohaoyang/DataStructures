console.log('List');

/**
 * 列表类
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    // this.clear = clear;
    this.find = find;
    this.toString = toString;
    // this.insert = insert;
    this.append = append;
    this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    this.length = length;
    // this.currPos = currPos;
    // this.getElement = getElement;
    // this.contains = contains;
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