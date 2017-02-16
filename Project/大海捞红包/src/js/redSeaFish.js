$(function(){

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
})