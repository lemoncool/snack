var box = {width: 50, height: 50};  //方块
var snack = [];  //身体
var con = document.getElementById('container');
var conWidth = con.offsetWidth;
var conHeight = con.offsetHeight;
window.onload = function () {
    gameStart();
}
gameStart = function () {
    $('.over').hide();
    initMap();
    initBody();
    createFood();
    document.onkeydown();
}
//again
$('.over').click(function () {
    gameStart();
})
//over
gameOver = function () {
    $('.over').show();
    $('#container').empty();
}
//初始化身体长度
// initBody = () =>{
initBody = function () {
    for (var k = 0; k < 3; k++) {
        var body = document.createElement('span');
        body.className = 'body';
        body.style.left = k * 50 + 'px';
        body.style.top = 0;
        snack.push(body);
        con.appendChild(body);
    }
    var head = document.createElement('span');
    head.id = 'head';
    snack.push(head);
    con.appendChild(head);
}

//生成地图
// initMap = () =>{
initMap = function () {
    //行数  34
    var rowNum = Math.floor(conHeight / box.height);
    //列数  19
    var rolNum = Math.floor(conWidth / box.width);
    for (var i = 0; i < rowNum; i++) {
        for (var j = 0; j < rolNum; j++) {
            var square = document.createElement('span');
            square.className = "span";
            con.appendChild(square);
        }
    }
}

//随机生成食物
// createFood = () =>{
createFood = function () {
    var food = null;
    var food = document.createElement('span');
    food.id = "food";
    food.style.left = Math.floor(Math.random() * 10) * 50 + 'px';
    food.style.top = Math.floor(Math.random() * 10) * 50 + 'px';
    <!--判断是否与身体重合 待处理-->
    // for (var j = 0; j <= snack.length - 1; j++) {
    //
    // }
    con.appendChild(food);
}

//吃到食物 身体加1 调用生成食物方法
// isGetFood = () =>{
isGetFood = function () {
    var head = snack[snack.length - 1];
    var food = document.getElementById('food');
    if (head.offsetLeft == food.offsetLeft && head.offsetTop == food.offsetTop) {
        console.log('重合');
        food.className = 'body';
        food.removeAttribute('id');
        snack.push(food);
        createFood();
    }
}

//direction 左右1 上下2
snackMove = function (boundary, offset, direction) {
    var snackLen = snack.length;
    var head = snack[snackLen - 1];
    //判断左右 和 上下 是否出界
    if (direction == 1 && head.style.left == boundary || direction == 2 && head.style.top == boundary) {
        gameOver();
    } else {
        for (var i = 0; i < snackLen - 1; i++) {
            snack[i].style.left = snack[i + 1].offsetLeft + "px";
            snack[i].style.top = snack[i + 1].offsetTop + "px";
        }
        (direction == 1) ? head.style.left = head.offsetLeft + offset + "px" : head.style.top = head.offsetTop + offset + "px"
        isGetFood();
    }
}

//键盘移动事件 判断出界
document.onkeydown = (ev) =>{
// document.onkeydown = function (ev) {
    var ev = ev || event;
    switch (ev.keyCode) {
        case 37:     //左移
            this.snackMove('0px', -50, 1);
            break;
        case 39:    // 右移
            this.snackMove('900px', 50, 1);
            break;
        case 40:    // 下移
            this.snackMove('650px', 50, 2);
            break;
        case 38:    // 上移
            this.snackMove('0px', -50, 2);
            break;
    }
}