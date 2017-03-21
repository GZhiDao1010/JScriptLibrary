class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
       
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }

    private onGroupComplete()
    {
        var img:egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("BG"); //背景
        var  stageW:number  = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        img.width = stageW;
        img.height = stageH;
        this.addChild(img);

        var musicImg:egret.Bitmap = new egret.Bitmap(); //旋转音乐图标
        musicImg.texture = RES.getRes("music_png");

        musicImg.width = 60;
        musicImg.height = 60;
        musicImg.anchorOffsetX =  30;
        musicImg.anchorOffsetY = 30;
        musicImg.x = 60;
        musicImg.y = 60;
        musicImg.touchEnabled =true;
        
        this.addChild(musicImg);
        var isStop:boolean = true;
         //不停旋转
        this.addEventListener( egret.Event.ENTER_FRAME, ( evt:egret.Event )=>{
            if(isStop){
                musicImg.rotation += 5;
            }
        }, this ); 

        musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP,() =>{
            if(isStop){
                isStop =false
            }else{
                isStop =true
            }
        },this)

        var gameText:egret.TextField = new egret.TextField(); //开始文本
        gameText.text = "开始游戏";
        gameText.bold = true;
        gameText.textColor = 0xffffff;
        this.addChild(gameText);
        gameText.x = 100;
        gameText.y = 600;
        gameText.touchEnabled = true;
        gameText.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            window.location.href = "/game.html";
        },this)

    }
}