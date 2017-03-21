var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.gameSource, _this);
        return _this;
    }
    Game.prototype.gameSource = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    Game.prototype.groupComplete = function () {
        var stageW = this.stage.stageWidth; //屏幕宽度
        var stageH = this.stage.stageHeight; //屏幕高度
        var squire1 = RES.getRes("ball_json.s1_png"); //方块1
        var img1 = new egret.Bitmap(squire1);
        img1.x = 0;
        img1.y = 0;
        var squire2 = RES.getRes("ball_json.s2_png"); //方块2
        var img2 = new egret.Bitmap(squire2);
        img2.x = 92;
        img2.y = 0;
        var squire3 = RES.getRes("ball_json.s3_png"); //方块3
        var img3 = new egret.Bitmap(squire3);
        img3.x = 184;
        img3.y = 0;
        var squire4 = RES.getRes("ball_json.s4_png"); //方块4
        var img4 = new egret.Bitmap(squire4);
        img4.x = stageW / 2;
        img4.y = stageH - 445;
        var ball = RES.getRes("ball_json.ball_png"); //方块4
        var ballImg = new egret.Bitmap(ball);
        ballImg.width = 45;
        ballImg.height = 45;
        ballImg.x = 0;
        ballImg.y = stageH - 45;
        this.addChild(img1);
        this.addChild(img2);
        this.addChild(img3);
        this.addChild(img4);
        this.addChild(ballImg);
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            var touchX = evt.localX; //鼠标点击的屏幕的 x 轴
            var touchY = evt.localY; //鼠标点击的屏幕的 y 轴
            var moveBall = egret.Tween.get(ballImg); //移动的dom
            moveBall.to({ x: touchX, y: touchY }, 200, egret.Ease.sineIn).call(function () { ballImg.rotation = 60; }).wait(200)
                .to({ x: touchX + 100, y: touchY + 100 }, 200, egret.Ease.sineIn);
            console.log(img4.x);
            console.log(img4.y);
            //console.log(global.Math( 0.5));
        }, this);
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map