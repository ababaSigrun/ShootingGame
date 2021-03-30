/**
 * 変数部
 */
//keyが押されたら。
document.addEventListener("keydown", handleKeydown);
// キャンバス
var canvas = document.getElementById('mainCanvas');
// コンテキスト
var ctx = canvas.getContext('2d')

var myX = 0;
var myY = 0;

var chargePower = 0;


/**
 * メイン処理
 */
function gameStart() {
    // 初期化処理
    my_init();

    // 0.1秒ごとに
    setInterval(drow, 10);


}

/**
 * 初期化処理
 */
function my_init() {
    // 座標を元に戻す。
    myX = canvas.width / 2
    myY = canvas.height / 2

    // console.log(myX);
    // console.log(myY);
}

function drow() {
    clearCanvas();
    my_drow();
}
function my_drow() {
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(myX, myY, 10, 10);

}

/**
 * 画面のリセット
 */
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//　kye 判定
function handleKeydown(event) {
    // キーコード(どのキーが押されたか)を取得
    var keyCode = event.keyCode;
    console.log(keyCode);



    if (keyCode == 39 && myX < 290) {
        // 右
        myX = myX + 3;
    }
    if (keyCode == 37 && myX > 10) {
        // 左   
        myX = myX - 3;
    }

    if (keyCode == 38 && myY > 5) {
        // 上
        myY = myY - 3;
    }
    if (keyCode == 40 && myY < 135) {
        // 下
        myY = myY + 3;
    }
    if (keyCode == 32) {
        //　スペース
        // 弾丸発射処理
        // https://www.programmingmat.jp/game_dev/webgame_dev/jssht1.html
    }
    
}