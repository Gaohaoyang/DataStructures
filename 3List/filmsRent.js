console.log('=================');
console.log('影碟租赁系统');
console.log('=================');

var arr = ['Star Wars', 'Up', 'Inception', 'The Godfather'];

// 用户列表
var customers = new List(); 

// 声明电影列表
var movieList = new List();
for (var i = 0; i < arr.length; i++) {
    movieList.append(arr[i]);
}
console.log(movieList);

/**
 * displayList 展示列表内容
 * @param  {List} list 列表对象
 * @return {[type]}      [description]
 */
function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        console.log(list.getElement());
    }
}

/**
 * displayList2 扩展方法
 * @param  {List} list 列表对象
 * @return {[type]}      [description]
 */
function displayList2(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement().name + ', ' + list.getElement().movie);
        } else {
            console.log(list.getElement());
        }
    }
}


/**
 * Customer 用户类
 * @param {String} name  用户名
 * @param {String} movie 电影名
 */
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

/**
 * checkOut 借出影碟方法
 * @param  {String} name         用户名
 * @param  {String} movie        电影名
 * @param  {List}   filmList     电影列表
 * @param  {List}   customerList 用户列表
 * @return {[type]}              [description]
 */
function checkOut(name, movie, filmList, customerList) {
    if (filmList.contains(movie)) {
        var c = new Customer(name,movie);// 添加一个用户
        customerList.append(c);
        filmList.remove(movie);
    } else{
        console.log(movie + ' is not available');
    }
}


//////////
// test //
//////////

displayList(movieList);

checkOut('gaohaoyang','Up',movieList,customers);

console.log('\n电影列表');
displayList2(movieList);
console.log('\n用户列表');
displayList2(customers);
