# 第1章 JavaScript 的编程环境和模型

## 1.1 JavaScript 环境

## 1.2 JavaScript 编程实践

### 1.2.1 声明和初始化变量

### 1.2.2 JavaScript 中的算术运算和数学库函数

* +，-，\*，/，%
* Math 库

### 1.2.3 判断结构

* if
* if-else
* if-else if
* swith case

### 1.2.4 循环结构

* while
* for

### 1.2.5 函数

有返回值和无返回值函数。

### 1.2.6 变量作用域

即函数作用域。函数内及函数内嵌套函数可见。

全局作用域。

没有块级作用域。

### 1.2.7 递归

任何可以被递归定义的函数，都可以被改写成迭代式的程序。

## 1.3 对象和面向对象编程

使用构造函数定义类。

然后给在添加属性和方法。

实例化时使用 `new` 关键字。

```js
/**
 * 定义一个人的对象
 * @param {String} name 名字
 */
function Person(name) {

    this.name = name; //属性

    this.run = run; //方法
}

function run() {
    console.log('running!');
}

var gao = new Person('gao');

console.log(gao.name); // gao
gao.run(); // running!
```

---

[下一章 第2章 数组](../2Array)
