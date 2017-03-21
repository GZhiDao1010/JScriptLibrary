var redSeaFish = {};

redSeaFish.home = function(){ //首页
	var musicComponent = { //音乐播放
			speed:10,//旋转速度
			direction:1,//1 顺时针 -1为逆时针
			num:0,//初始化
			flag:null,//定时器返回值
			clickFlag:0,
			rotateBox:$('#musicBox'),//旋转的div
			audio:document.getElementById('musicAudio'),//播放的music
			playOrPause:function(){ 
				if(this.clickFlag != 0){ //暂停
					clearInterval(this.flag);
					this.audio.pause();
					this.clickFlag = 0;
					document.addEventListener("WeixinJSBridgeReady",function(){
						this.audio.pause();
					},false)
				}else{ //播放
					this.rotateCenter();
					this.audio.play();
					this.clickFlag = 1;
					document.addEventListener("WeixinJSBridgeReady",function(){
						audio.play();
					},false)
				}
			},
			rotateCenter:function(){ //中心旋转
				var _this =this;
				_this.flag = setInterval(function(){
					var _s = _this.speed;
					var _n = _this.num ++ 
					var runTime = _s * _n * _this.direction;
					_this.rotateBox.css({
						"transform":'rotate('+runTime+'deg)'
					})
				},100);
			}
	}
	var timeCountDown = function(d, o){ //倒计时
		var _this = this;
		console.log(_this)
		var f = {
			zero: function(n){
				var n = parseInt(n, 10);
				if(n > 0){
					if(n <= 9){
						n = "0" + n;	
					}
					return String(n);
				}else{
					return "00";	
				}
			},
			dv: function(){
				d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
				var future = new Date(d), now = new Date();
				//现在将来秒差值
				var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, pms = {
					sec: "00",
					mini: "00",
					hour: "00",
					day: "00",
					month: "00",
					year: "0"
				};
				if(dur > 0){
					pms.sec = f.zero(dur % 60);
					pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
					pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
					//pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
					pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400))) : "00";
					//月份，以实际平均每月秒数计算
					pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
					//年份，按按回归年365天5时48分46秒算
					pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
				}
				
				return pms;
			},
			ui: function(){
				if( f.dv().sec == '00' && f.dv().mini == '00' && f.dv().hour == '00' && f.dv().day == '00' && f.dv().month == '00'){
					activityEndFn();//活动结束
					clearTimeout(f.ui);
					return;
				}
				if(o.sec){
					o.sec.innerHTML = f.dv().sec;
				}
				if(o.mini){
					o.mini.innerHTML = f.dv().mini;
				}
				if(o.hour){
					o.hour.innerHTML = f.dv().hour;
				}
				if(o.day){
					o.day.innerHTML = f.dv().day;
				}
				if(o.month){
					o.month.innerHTML = f.dv().month;
				}
				if(o.year){
					o.year.innerHTML = f.dv().year;
				}
				setTimeout(f.ui, 1000);
			}
		};	
		f.ui();
	};
	var setCountDown = { //设置倒计时
		    $: function(id){
		        return document.getElementById(id);    
		    },
		    futureDate: Date.UTC(2017, 1, 16, 18), //设置倒数时间：2017年2-1月16日15时
		    obj: function(){
		        return {
		        	ront:setCountDown.$("leftTime"), //父容器
		            sec: setCountDown.$("sec"),
		            mini: setCountDown.$("mini"),
		            hour: setCountDown.$("hour"),
		            day: setCountDown.$("day"),
		            month: setCountDown.$("month"),
		            year: setCountDown.$("year")
		        }
		    }
	};
	var beginGameCoverFn = { //开始游戏按钮磨砂效果
		flag:null,
		stop:function(){
			clearInterval(this.flag);
		},
		run:function(){
			var _this =this;
			_this.flag = setInterval(function(){
				var cover = $('#beginGameCover');
				var state = cover[0].hidden;
				if(state){
					$('#beginGameCover').css({"display":"block"})
					cover[0].hidden = false;
				}else{
					
					cover[0].hidden = true;
					$('#beginGameCover').css({"display":"none"})
				}
			},800)
		}
	}
	var activityEndFn = function(){ //活动结束执行方法
		document.getElementById('leftTime').style.color = 'red';
		document.getElementById('leftTime').innerHTML = '活动已经结束！';
		
		//beginGameCoverFn.stop(); //关闭按钮闪烁
		
	}
	
	beginGameCoverFn.run();//按钮开始闪烁
	timeCountDown(setCountDown.futureDate, setCountDown.obj()); //开始倒计时
	
	var closePopupBox = function(){ //关闭弹框
		$(document).find("#popupBox").css({"display":"none"})
	}
	var openPopupBox = function(){ //打开弹框
		$(document).find("#popupBox").css({"display":"block"})
	}
	//musicComponent.playOrPause(); //自动播放背景音乐
	$('#musicBox').on('click',function(){
		musicComponent.playOrPause();
	})
	$('#gameRule').on('click',function(){
		openPopupBox();
	})
	$('#popupCloseBtn').on('click',function(){
		closePopupBox();
	})
};
redSeaFish.secondsCountdown = function(){ //30秒倒计时
	var msg = {
			time:5, //倒计时长 单位：s
			id:'sec' //显示的dom
	}
	var num = setInterval(function(){
		document.getElementById(msg.id).innerHTML = --msg.time;
		if(msg.time <= 0){ //时间停止
			redSeaFish.timeOut();
			clearInterval(num);
		}
	},1000)
}
redSeaFish.timeOut = function(){ //30秒倒计时结束执行方法
	alert('方法名：redSeaFish.timeOut()')
}


redSeaFishPlayGame = {
		_this:this.redSeaFish,
		ratios:[134/167,222/59,519/189], //小船、星星、漂流瓶图片的比例
		size:[0.20,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2], //缩放图片比例
		num:0,
		moveImgs:$('.move_imgs'),
		fishingImgs:$('.fishing'),
		catFishingBox:$('#catFishingBox'),
		gameCanvace:document.getElementById("gameWorkPlace").getContext("2d"),   //漂流画布
		//catFishingCanvas:document.getElementById('catFishing').getContext('2d'),//黑猫捞红包画布
		activeRange:{//活动范围的宽，高
			width:$(window).width(),
			height:$(window).height()*0.4
		},
		gameCanvaceHeight:function(){ //画布自适应高度
			var wHeight = $(window).height();
			var wWidth = $(window).width();
			$('#gameWorkPlace').css({
				"height":wHeight*0.4+'px',
				"width":wWidth+'px'
			})
		},
		treeCatStyle:function(){ //初始化树猫渔网图片
			return;
			var o ={},rodDefaultXY,netDefaultXY,_w = $(window).width(),
			_h = $(window).height();
			if($(window).height() < 490){
				rodDefaultXY = {
						x:_w * 0.23,
						y:_h * 0.25
				}
				netDefaultXY = {
						x:_w * 0.5,
						y:_h * 0.23
				}
				$('#rod').css({
					"top":'25%',
				})
				$('#net').css({
					"top":'23%',
				})
			}else{
				rodDefaultXY = {
						x:_w * 0.23,
						y:_h * 0.232
				}
				netDefaultXY = {
						x:_w * 0.5,
						y:_h * 0.21
				}
			}
			o.rod = rodDefaultXY;
			o.net = netDefaultXY;
			return o
			
		},
		rod:function(){
			return;
			var _this = this,
			_catFishingCanvas =  _this.catFishingCanvas,
			msg = {
					width:180,
					height:200,
					vx:10,
					vy:10,
					areay:109,
					option:0
			},
			rodImg = new Image();
			rodImg.src = '../img/rod.png';
			rodImg.addEventListener('load',imgin);
			function imgin(){
				_catFishingCanvas.width = rodImg.width;
				_catFishingCanvas.height = rodImg.height;
				//_catFishingCanvas.scale(0.5,0.2);
				_catFishingCanvas.clearRect(0,0,_catFishingCanvas.width,_catFishingCanvas.height);
				_catFishingCanvas.drawImage(rodImg,0,0,_catFishingCanvas.width*0.5,_catFishingCanvas.height*0.5);
				//_catFishingCanvas.style.width  = '100%';
			}
		},
		touchstartNoRepeat:true,
		touchstart:function(){ //手指触摸事件
			if(!this.touchstartNoRepeat){
				return;
			}
			var _this = this;
			var network = $('#network');
			console.log(network)
			var num =0;
			var ww = $(window).width();
			function rodAndNet(){ //鱼竿旋转
				var x = ww * 0.26 + 'px';
				var y = ww * 0.19 + 'px';
				console.log(y+'****'+x)
				var num2=0; 
				var rodAndNetSelf = setInterval(function(){
					num2++;
					$('.rodAndNet').css({
						"transform": 'rotate('+num2*0.3+'deg)', //向下旋转
				    	"transform-origin": ' '+x+' '+y+' ', //旋转的中心位置
					})
					if(num2*0.3 > 70){
						//rotateLargetWidth();
					}
					if(num2*0.3 > 110){ // >110时，停止旋转
						_this.getCanvasMsg(); //分析是否捞到红包...
						clearInterval(rodAndNetSelf)
					}
				},5)
			}
			function rotateLargetWidth(){ //拉长
				var self =  setInterval(function(){
					num++;
					var w = 27 + num*0.199 ;
					if(w >= 61.8){
						_this.netRotate(); //渔网旋转
						rodAndNet(); //鱼竿旋转
						clearInterval(self) //停止鱼竿拉长
					}
					$('.rod').css({
						"width": w + '%', 
					})
					var nt = 55 + num*-0.2 + '%';
					var nl = 50 + num*0.2 + '%';
					$('.cat_fishing_box .net').css({
						"top": nt,
				    	"left": nl
					})
				},5)
			}
			rotateLargetWidth();
			console.log('手指触摸事件')
		},
		netRotate:function(){ //渔网旋转
			var ww = $(window).width()*0.828 + 'px';
			var wh = $('.rodAndNet').height() * 0.20  + 'px';
			$('.net img').css({
				"transform": 'rotateX(-175deg)', //向下旋转
		    	"transform-origin":'0px '+wh+' 0px', //旋转的中心位置
			})
		},
		touchend:function(){ //手指离开屏幕事件
			this.touchstartNoRepeat = false; //禁止点击再次触发touchstart事件
			console.log('手指离开屏幕事件')
		},
		heighEqual:function(){ //根据高度调整漂流礼物的高度间隔
			var equal=0;
			var wheight = $(window).height();
			if(wheight >= 700){
				equal = 6;
			}else if(wheight >= 600 && wheight < 700){
				equal = 5.8;
			}else{
				equal = 4.5;
			}
			return equal;
		},
		squares:function(){ //获得三个礼物的坐标位置dx,dy
			var heighEqual = this.heighEqual();
			var o = {
					w:this.activeRange.width,
					h:this.activeRange.height
			}
			
			var _x = Math.floor(o.w/3);
			var _y = Math.floor(o.h/heighEqual);
			var g =  [
		              {dx:-90,dy:_y*0+10},
		              {dx:-90,dy:_y*1+10},
		              {dx:-90,dy:_y*2+10},
	              ]
			return g;
		},
		randomImgs:function(){ //随机获得一组图片的集合
			var _t =this;
			var array =  [_t.moveImgs[0],_t.moveImgs[2],_t.moveImgs[1]];
			for(var i=array.length - 1;i > 0;i--){
				var j = Math.floor(Math.random() * (i+1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		},
		drawOrClearCanvace:function(array,x){ //绘制/Clear图片
			var _t = this;
			var axisXY=_t.squares();
			var _canvas = _t.gameCanvace;
			var _dx = x;
			if(_dx > 600){
				return
			}
			for(var i=0;i<array.length;i++){
				var obj ={
						url:array[i],
						imgWidth:array[i].width*0.25,
						imgHeight:array[i].height*0.25 
				}
				
				_canvas.clearRect(axisXY[i].dx+_dx-1,axisXY[i].dy, obj.imgWidth, obj.imgHeight);
				_canvas.drawImage( obj.url,
						0,0,
						array[i].width,array[i].height,
						axisXY[i].dx+_dx, axisXY[i].dy,
						obj.imgWidth , obj.imgHeight);
				var o ={
						url:array[i],
						dx:axisXY[i].dx+_dx,
						dy:axisXY[i].dy
				}
				
			}
		},
		speed:25, //移动速度
		density:2500, //礼物的密度
		gameTime:1000,//礼物在河中的时间
		switchGame:false,//是否暂停游戏
		beginGame:function(){ //开始游戏
			var _t = this;
			_t.gameCanvaceHeight(); //设置画布高度
			if(_t.switchGame){
				_t.switchGame = false;
			}else{
				_t.switchGame = true; 
			}
			for(var i=0;i<_t.gameTime;i++){
				setTimeout(function(){
						var array = _t.randomImgs();
						var time = 0;
						setInterval(function(){
							if(_t.switchGame){
								_t.drawOrClearCanvace(array,time++);
							}
						},_t.speed)
					
				},i*_t.density)
			}
			
			setTimeout(function(){
				_t.switchGame = false;
				console.log('停止')
			},_t.gameTime * _t.density)
		},
		stopGame:function(){ //暂停游戏
			this.switchGame = false;
		},
		againGame:function(){ //再玩一次
			this.switchGame = true;
		},
		getCanvasMsg:function(){//获得画布上指定坐标上图片信息 ,判断是否捞到红包
			var gameWorkPlace = $('#gameWorkPlace');
			var placeWidth = gameWorkPlace.width();
			var placeheight = gameWorkPlace.height();
			var average = 5;
			var axis = [
			       {x:0,y:placeheight/average},
			       {x:placeWidth/average,y:placeheight/average*2},
			       {x:placeWidth/average*2,y:placeheight/average*0},
			      
			   ]
			console.log(axis);
			for(var i=0;i<axis.length;i++){
				var canvasImg  = this.gameCanvace.getImageData(axis[i].x,axis[i].y,placeWidth/4,placeheight/4);
				var n=0;
				var red=0,green=0,blue=0,alpha=0;
				var _data = canvasImg.data;
				for(var i=0;i<_data.length;i+=4){
					n+=parseInt(canvasImg.data[i]);
					red+= parseInt( _data[i]);
					green+= parseInt(_data[i+1]);
					blue+= parseInt(_data[i+2]);
					alpha+= parseInt(_data[i+3]);
				}
				if(red > 80000 && blue > 80000){
					console.log('捞到红包')
				}
				console.log(red)
				console.log('没捞到哦....')
			}
		}
}

redSeaFish.playGame = function(){ //玩游戏...
	
	
}
redSeaFish.playRule = function(){ //游戏规则、奖品页
	var topHeight = $('.rule_top_bg')[0].offsetHeight; 
	var windowHeight = $(window).height();
	$('.rule_top').css({"height":topHeight + 'px'})
	$('#rule_middle_cont').css({"height":windowHeight - topHeight + 10 +'px',"top":topHeight - 20 + 'px'});
}
redSeaFish.removPopue = function(){ //删除弹框
	return $(document).find('.popup_box').remove();
}
redSeaFish.notWinning = function(){ //未中奖情况
	var ishas = $(document).find('.popup_box').length;
	if(ishas != 0){
		$(document).find('.popup_box').remove();
	}
	
	var msg = [ //未中奖信息
	            {src:'../img/notwin1.png',text:'加把劲哟！我准备好红包，你储备好力气！'},
	            {src:'../img/notwin2.png',text:'捞的不够努力，红包与你擦肩 而过、再试一次！'},
	            {src:'../img/notwin3.png',text:'换个姿势放大招！'},
	 	    ];
	var num = Math.floor(Math.random()*msg.length);
	var h = '<section class="popup_box" title="弹框背景" style="display:block">'+
	'	<section class="popup_cont_box" title="弹框内容" style="text-align:center;">'+
	'		<section class="popup_title_box"style="background-color:#eb0056;text-align:center;height: 15px;border-radius:5px 5px 0 0;">'+
	'			<a href="javascript:;" onclick="redSeaFish.removPopue()" class="popup_close_btn" id="popupCloseBtn" style="top: -4px; font-size: 29px;">×</a>'+
	'		</section>'+
	'		<section class="popup_cont"  style="background-color:#eb0056;text-align:center;color:#f6ff2e;border-radius:0 0 5px 5px ;font-size:18px;">'+
	'			<section class="popup_cont_text">'+msg[num].text+'</section>'+
	'			<img class="popup_erweima" style="width:50%;padding:5px 25%" src="'+msg[num].src+'">'+
	'			<button class="play_agin">再玩一次</button>'+
	'		</section>'+
	'	</section>'+
	'</section>';
	$('body').append(h);
}
redSeaFish.playAgainGame = function(){ //再玩一次
	var h = '<section class="popup_box" title="弹框背景" style="display:block">'+
	'	<section class="popup_cont_box" title="弹框内容" style="text-align:center;">'+
	'		<section class="popup_title_box"style="background-color:#eb0056;text-align:center;height: 15px;border-radius:5px 5px 0 0;">'+
	'			<a href="javascript:;" onclick="redSeaFish.removPopue()" class="popup_close_btn" id="popupCloseBtn" style="top: -4px; font-size: 29px;">×</a>'+
	'		</section>'+
	'		<section class="popup_cont"  style="background-color:#eb0056;min-height: initial;text-align:center;color:#f6ff2e;border-radius:0 0 5px 5px ;font-size:18px;">'+
	'			<section class="popup_cont_text" style="margin: 50px 0;">加把劲哟！我准备好红包，你储备好力气！</section>'+
	'			<button class="play_agin">再玩一次(2)</button>'+
	'			<button class="play_agin">兑换奖品</button>'+
	'		</section>'+
	'	</section>'+
	'</section>';
	$('body').append(h);
}
redSeaFish.getWinning = function(){ //中奖显示
	var ishas = $(document).find('.popup_box').length;
	if(ishas != 0){
		$(document).find('.popup_box').remove();
	}
	var msg = [ //未中奖信息
	            {src:'../img/win1.png',text:'恭喜你捞到一个红包'},
	 	    ];
	var h = '<section class="popup_box" title="弹框背景" style="display:block">'+
	'	<section class="popup_cont_box" title="弹框内容" style="text-align:center;">'+
	'		<section class="popup_title_box"style="background-color:#eb0056;text-align:center;height: 25px;border-radius:5px 5px 0 0;">'+
	'			<a href="javascript:;" onclick="redSeaFish.removPopue()" class="popup_close_btn" id="popupCloseBtn" style="top: -4px; font-size: 29px;">×</a>'+
	'		</section>'+
	'		<section class="popup_cont"  style="background-color:#eb0056;position: relative;text-align:center;color:#f6ff2e;border-radius:0 0 5px 5px ;font-size:18px;">'+
	'			<section class="popup_cont_text" style="position: absolute;text-align: center;left: 0;width: 100%;font-size: 20px;top: 38%;">'+msg[0].text+'</section>'+
	'			<img class="popup_erweima" style="width:100%;padding:5px 0" src="'+msg[0].src+'">'+
	'			<button class="play_agin" onclick="redSeaFish.getToGift()">立即领取</button>'+
	'		</section>'+
	'	</section>'+
	'</section>';
	$('body').append(h);
}
redSeaFish.getToGift = function(){ //立即领取
	alert("方法名：redSeaFish.getToGift()")
}
redSeaFish.fillInWinMsg = function(){ //填写中奖信息
	var ishas = $(document).find('.popup_box').length;
	if(ishas != 0){
		$(document).find('.popup_box').remove();
	}
	var msg = [ //未中奖信息
	            {src:'../img/win1.png',text:'恭喜你捞到一个红包'},
	 	    ];
	var h = '<section class="popup_box" title="弹框背景" style="display:block" >'+
	'	<section class="popup_cont_box" title="弹框内容" style="text-align:center;">'+
	'		<section class="fill_in_msg">'+
	'			<section class="fill_in_msg_line"></section>'+
	'		</section>'+
	'		<section class="fill_in_inputs">'+
	'			<section class="row">手机号：<input type="text" class="input_number" /></section>'+
	'			<section class="row">验证码：<input type="text" class="input_number" style="width:30%;"  /><button class="get_yzm">获取验证码</button></section>'+
	'			<section>'+
	'				<button class="play_agin" onclick="redSeaFish.removPopue()">取消</button>'+
	'				<button class="play_agin" onclick="redSeaFish.submitManMsg()">提交</button>'+
	'			</section>'+
	'		</section>'+
	'	</section>'+
	'</section>';
	$('body').append(h);
}
redSeaFish.submitManMsg = function(){ //提交领奖信息
	alert("方法名：redSeaFish.submitManMsg()")
}