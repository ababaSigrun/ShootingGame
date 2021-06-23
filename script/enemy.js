
// 敵キャラ基底クラス
class Enemy {
    constructor( color, score, appearance, xSpeed, ySpeed, hitPoint, count, maxCount, x, y) {
        this.color = color; // 色
        this.score = score; // スコア
        this.appearance = appearance; // 出現した方向
        this.xSpeed = xSpeed; // x方向へのスピード
        this.ySpeed = ySpeed; // y方向へのスピード
        this.hitPoint = hitPoint; // ヒットポイント
        this.count = count // 何回描写されたかのカウント
        this.maxCount = maxCount; // 最大描写カウント
        this.x = x; // x座標
        this.y = y; // y座標
    }
}




/**
 * 敵機計算
 */
function enemyCal() {
    // 登場敵機判定
    var color = checkEnemyColor();
    var direction = "";
    if (color != "none") {
        direction = checkEnemyDirection();
    }
    // 敵機出現位置判定

    console.log("direction : " + direction);
}



/**
 * 登場する敵判定。
 */
function checkEnemyColor() {
    var random = Math.random();
    var color = "none";
    // 出現判定。
    if (random <= 0.98) {
        // 敵出現なし
    } else if (random > 0.98 && random <= 0.99) {
        // 黄色出現
        color = "yellow";
    } else if (random > 0.99 && random <= 0.999) {
        // 緑出現
        color = "Green";
    } else if (random > 0.999) {
        color = "Pink";
    }
    return color;
}

/**
 * 敵機が出現する方角を決める
 */
function checkEnemyDirection() {
    var random = Math.random();
    var direction = "";
    // 出現判定。
    if (random <= 0.25) {
        // 北
        direction = "north";
    } else if (random > 0.25 && random <= 0.5) {
        // 西
        direction = "west";
    } else if (random > 0.5 && random <= 0.75) {
        // 東
        direction = "east";
    } else {
        // 南
        direction = "south";
    }
    return direction;
}


/**
 * 敵機描写
 */
function enemyDrow() {
    // console.log("enemyDrow");
}