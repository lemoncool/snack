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

// snackMove = function () {
//
// }

//键盘移动事件 判断出界
// document.onkeydown = (ev) =>{
document.onkeydown = function (ev) {
    var snackLen = snack.length;
    var head = snack[snackLen - 1];
    var ev = ev || event;
    switch (ev.keyCode) {
        //左移
        case 37:
            if (head.style.left == '0px') {
                gameOver();
            } else {
                for (var i = 0; i < snackLen - 1; i++) {
                    snack[i].style.left = snack[i + 1].offsetLeft + "px";
                    snack[i].style.top = snack[i + 1].offsetTop + "px";
                }
                head.style.left = head.offsetLeft - 50 + "px";
                head.style.top = head.offsetTop + "px";
                //移动的同时判断是否吃到食物
                isGetFood();
            }
            break;
        // 右移
        case 39:
            if (head.style.left == '900px') {
                gameOver();
            } else {
                for (var i = 0; i < snackLen - 1; i++) {
                    snack[i].style.left = snack[i + 1].offsetLeft + "px";
                    snack[i].style.top = snack[i + 1].offsetTop + "px";
                }
                head.style.left = head.offsetLeft + 50 + "px";
                head.style.top = head.offsetTop + "px";
                isGetFood();
            }
            break;
        // 下移
        case 40:
            if (head.style.top == '650px') {
                gameOver();
            } else {
                for (var i = 0; i < snackLen - 1; i++) {
                    snack[i].style.top = snack[i + 1].offsetTop + "px";
                    snack[i].style.left = snack[i + 1].offsetLeft + "px";
                }
                head.style.top = head.offsetTop + 50 + "px";
                head.style.left = head.offsetLeft + "px";
                isGetFood();
            }
            break;
        // 上移
        case 38:
            if (head.style.top == '0px') {
                gameOver();
            } else {
                for (var i = 0; i < snackLen - 1; i++) {
                    snack[i].style.top = snack[i + 1].offsetTop + "px";
                    snack[i].style.left = snack[i + 1].offsetLeft + "px";
                }
                head.style.top = head.offsetTop - 50 + "px";
                head.style.left = head.offsetLeft + "px";
                isGetFood();
            }
            break;
    }
}