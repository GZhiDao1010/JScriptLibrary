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
redSeaFish.canvasHeight = function(){ //画布自适应高度
	var wHeight = $(window).height()*0.35;
	return $('#gameWorkPlace').css({
		"height":wHeight+'px'
	})
}
redSeaFish.staticGame = function(){ //静态动画
	this.canvasHeight();
	/*var imgGroup = {
			img:function(){
				var imgz = new Image();  
				imgz.src = "../img/stars.png"; 
				imgz.style.width = "100px";
				imgz.style.height = "100px";
				return imgz;
			}
	}*/
	var moveImgs = $('.move_imgs')[0];
	var shipsWidth = $('.move_imgs')[0].width*0.2;
	var shipsHeight = $('.move_imgs')[0].height*0.2;
	console.log(shipsWidth+'--'+shipsHeight)
	console.log($('.move_imgs')[0].height)
	var mycv = document.getElementById("gameWorkPlace");  
	var myctx = mycv.getContext("2d");
	myctx.drawImage(moveImgs, 0, 0,shipsWidth,shipsHeight);
	
	
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
	'			<button class="play_agin" onclick="redSeaFish.playAgainGame()">再玩一次</button>'+
	'		</section>'+
	'	</section>'+
	'</section>';
	$('body').append(h);
}
redSeaFish.playAgainGame = function(){ //再玩一次
	alert("方法名：redSeaFish.playAgainGame()")
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