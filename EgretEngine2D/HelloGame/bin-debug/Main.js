var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    Main.prototype.onGroupComplete = function () {
        var img = new egret.Bitmap();
        img.texture = RES.getRes("BG"); //背景
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        img.width = stageW;
        img.height = stageH;
        this.addChild(img);
        var musicImg = new egret.Bitmap(); //旋转音乐图标
        musicImg.texture = RES.getRes("music_png");
        musicImg.width = 60;
        musicImg.height = 60;
        musicImg.anchorOffsetX = 30;
        musicImg.anchorOffsetY = 30;
        musicImg.x = 60;
        musicImg.y = 60;
        musicImg.touchEnabled = true;
        this.addChild(musicImg);
        var isStop = true;
        //不停旋转
        this.addEventListener(egret.Event.ENTER_FRAME, function (evt) {
            if (isStop) {
                musicImg.rotation += 5;
            }
        }, this);
        musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (isStop) {
                isStop = false;
            }
            else {
                isStop = true;
            }
        }, this);
        var gameText = new egret.TextField(); //开始文本
        gameText.text = "开始游戏";
        gameText.bold = true;
        gameText.textColor = 0xffffff;
        this.addChild(gameText);
        gameText.x = 100;
        gameText.y = 600;
        gameText.touchEnabled = true;
        gameText.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            window.location.href = "/game.html";
        }, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map