/**
 * 変数部
 */
//keyが押されたら。
document.addEventListener("keydown", handleKeydown);
// キャンバス
var canvas = document.getElementById('mainCanvas');
// コンテキスト
var ctx = canvas.getContext('2d')

// 自機の位置
var myX = 0;
var myY = 0;

// 自機スピード
var myMoveSpedd = 3;

// 弾スピード
var bulletSpeed = 8;
// 弾方向
var bulletDirection = 0;
// 弾リスト
var bulletList = new Array();


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

    // →に設定
    bulletDirection = 39;
}

function drow() {
    clearCanvas();
    myDrow();
    bulletCal();
    bulletDrow();
}
/**
 * 画面のリセット
 */
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/**
 * 自機の描写
 */
function myDrow() {
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(myX, myY, 10, 10);

}
/**
 * 弾丸の座標計算
 */
function bulletCal() {
    console.log("bulletCal");
    for (i = 0; i < bulletList.length; i++) {
        if (bulletList[i].z == 37) {
            bulletList[i].x -= bulletSpeed;
        } else if (bulletList[i].z == 38) {
            bulletList[i].y -= bulletSpeed;
        } else if (bulletList[i].z == 39) {
            bulletList[i].x += bulletSpeed;
        } else if (bulletList[i].z == 40) {
            bulletList[i].y += bulletSpeed;
        }
    }
    // 枠の外に行ったものは除外する。
    while (bulletList.length > 0 && (bulletList[0].y < 0 ||
        bulletList[0].y > 140 ||
        bulletList[0].x < 0 ||
        bulletList[0].x > 300)) {
        // 画面外に行ったら抜かす
        bulletList.shift();
    }
}

/**
 * 弾丸を描写
 */
function bulletDrow() {
    console.log("bulletDrow");
    // 弾丸の色を設定
    ctx.fillStyle = "rgb(0, 255, 255)";

    // 発射済み弾丸を塗りつぶし正方形として描画
    for (i = 0; i < bulletList.length; i++) {
        ctx.fillRect(bulletList[i].x - 1, bulletList[i].y, 2, 2);
    }
}


//　kye 判定
function handleKeydown(event) {
    // キーコード(どのキーが押されたか)を取得
    var keyCode = event.keyCode;
    //console.log(keyCode);



    if (keyCode == 39 && myX < 290) {
        // 右
        myX = myX + myMoveSpedd;
        bulletDirection = keyCode;
    } else if (keyCode == 37 && myX > 10) {
        // 左   
        myX = myX - myMoveSpedd;
        bulletDirection = keyCode;
    } else if (keyCode == 38 && myY > 5) {
        // 上
        myY = myY - myMoveSpedd;
        bulletDirection = keyCode;
    }
    if (keyCode == 40 && myY < 135) {
        // 下
        myY = myY + myMoveSpedd;
        bulletDirection = keyCode;
    } else if (keyCode == 32) {
        //　スペース
        // 弾丸発射処理
        // 弾丸オブジェクト作成
        var obj = new Object();
        obj.x = myX;
        obj.y = myY;
        obj.z = bulletDirection;

        bulletList.push(obj);
    }

}