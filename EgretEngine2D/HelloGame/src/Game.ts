class Game extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.gameSource,this);


    }
    private gameSource(event:egret.Event){

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.groupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");

    }
    private groupComplete(){    
        var stageW = this.stage.stageWidth; //屏幕宽度
        var stageH = this.stage.stageHeight;//屏幕高度
        
        var squire1:egret.Texture = RES.getRes("ball_json.s1_png"); //方块1
        var img1:egret.Bitmap = new egret.Bitmap(squire1);
        img1.x = 0;
        img1.y = 0;

        var squire2:egret.Texture = RES.getRes("ball_json.s2_png"); //方块2
        var img2:egret.Bitmap = new egret.Bitmap(squire2);
        img2.x = 92;
        img2.y = 0;
        
        var squire3:egret.Texture = RES.getRes("ball_json.s3_png"); //方块3
        var img3:egret.Bitmap = new egret.Bitmap(squire3);
        img3.x = 184;
        img3.y = 0;
        
        var squire4:egret.Texture = RES.getRes("ball_json.s4_png"); //方块4
        var img4:egret.Bitmap = new egret.Bitmap(squire4);
        img4.x = stageW/2;
        img4.y =  stageH - 445;
        
        

        var ball:egret.Texture = RES.getRes("ball_json.ball_png"); //方块4
        var ballImg:egret.Bitmap = new egret.Bitmap(ball);
        ballImg.width = 45;
        ballImg.height = 45;
        ballImg.x = 0;
        ballImg.y = stageH - 45;

        this.addChild(img1);
        this.addChild(img2);
        this.addChild(img3);
        this.addChild(img4);
        this.addChild(ballImg);
        
            
        this.touchEnabled =true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,( evt:egret.TouchEvent ) =>{
            
            var touchX = evt.localX;//鼠标点击的屏幕的 x 轴
            var touchY = evt.localY;//鼠标点击的屏幕的 y 轴
            var moveBall= egret.Tween.get(ballImg);//移动的dom

            moveBall.to( {x:touchX,y:touchY},200,egret.Ease.sineIn).call( ()=> {ballImg.rotation = 60;} ).wait( 200 )
            .to({x:touchX+100,y:touchY+100},200,egret.Ease.sineIn)
            
            console.log(img4.x)
            console.log(img4.y)
            //console.log(global.Math( 0.5));
        },this)

    }
}