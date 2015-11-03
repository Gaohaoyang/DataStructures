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