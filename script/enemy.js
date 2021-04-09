
// 敵キャラ基底クラス
class Enemy {
    constructor(name, color, score, appearance, xSpeed, ySpeed, hitPoint, count, maxCount, x, y) {
        this.name = name; // 名前
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
    var random = Math.random();
    var color = "none";
    // 出現判定。
    if (random <= 0.98) {
        // 敵出現なし
        console.log(color);
    } else if (random > 0.98 && random <= 0.99) {
        // 黄色出現
        color = "yellow";
        console.log(color);
    } else if (random > 0.99 && random <= 0.999) {
        // 緑出現
        color= "Green";
        console.log(color);
    } else if (random > 0.999) {
        color = "Pink";
        console.log(color);
    }
}

/**
 * 敵機描写
 */
function enemyDrow() {
    // console.log("enemyDrow");
}