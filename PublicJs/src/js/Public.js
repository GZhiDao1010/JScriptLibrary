;
! function(win) {
    "use strict";
    console.time(11)
    var Public = function() {};
    Public.prototype.test = function() {
        console.log('Public');
    }
    Public.prototype.alert = function(text) {
        alert(text);
    }
    Public.prototype.isMobile = function(value) { //手机格式
        var reg = /^((1[3-8][0-9])+\d{8})$/;
        return reg.test(value);
    }
    Public.prototype.allPhone = function(value) { //号码，固话与手机
        return reg.test(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value) || /^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/.test(value));
    }
    Public.prototype.allFax = function(value) { //固话、传真,传真格式与固话是一样的
        return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value);
    }
    Public.prototype.ispositivenum = function(value) { //正整数
        var reg = /^([0]|[1-9]\d*)$/;
        return reg.test(value);
    }
    Public.prototype.pFloatTwo = function(value) { //正数（包括浮点数） 最多保留两位小数
        return /^([1-9]\d*|[0])(\.\d{1,2})?$/.test(value);
    }
    Public.prototype.price = function(value) { //价格（包括浮点数）最大值99999.99
        return value > 0 && (/^([1-9]\d{0,4}|[0])(\.\d{1,2})?$/.test(value));
    }
    Public.prototype.size = function(value) { //正整数，最大值99999
        var reg = /^[1-9]\d{0,4}$/;
        return this.optional(element) || (reg.test(value));
    }
    Public.prototype.qty = function(value) { //最大值99999.999，最多保留三位小数
        return value > 0 && (/^([1-9]\d{0,4}|[0])(\.\d{1,3})?$/.test(value));
    }
    Public.prototype.isCarNo = function(value) { //车牌号码验证 ,大小写不区分
        var reg = /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]$|^[a-zA-Z]{2}\d{7}$ /;
        return reg.test(value);
    }
    Public.prototype.getRandom = function(min, max) { //闭区间  获取随机数
        return Math.round(Math.random() * (max - min + 1) + min, 10);
    }
    Public.prototype.copyObject = function(obj, deep) { //对象复制
        var result = '';
        if (type(obj) !== 'object') return;
        //利用JSON的方法进行深复制和浅复制
        return result = deep ? JSON.parse(JSON.stringify(obj)) : obj;
    }
    Public.prototype.isWeChat = function() { //判断网页是否在微信浏览器打开
        return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger";
    }
    Public.prototype.isApple = function() { //判断手机系统  Apple
        return /ip(hone|ad|od)/i.test(navigator.userAgent.toLowerCase());
    }
    Public.prototype.isAndroid = function() { //判断手机系统  Android
        return /android/i.test(navigator.userAgent.toLowerCase());
    }
    Public.prototype.md5 = function() { //js仿照md5
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        return str.split('').sort(function(v1, v2) {
            return Math.random() > 0.5;
        }).join('').slice(0, 32);
    }
    Public.prototype.getDay = function() { //获取星期几
        var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        return arr[new Date().getDay()];
    }
    Public.prototype.throttle = function(func, wait, options) { //函数节流
        //设置三个变量用于保存信息
        var context, //保存上下文
            args, //保存参数
            result; //保存函数的返回值

        //设置一个保存定时器的timer
        var timeout = null;

        //设置上一次函数执行的时间戳
        var previous = 0;

        //设置options的默认值
        if (!options) {
            options = {};
        }

        //设置执行函数
        var later = function() {
            //如果options.leading为false则每次出发回调后将previous置为0
            previous = options.leading === false ? 0 : Date.now();

            timeout = null;

            result = func.apply(context, args);

            if (!timeout) {
                context = args = null;
            }
        }

        return function() {

            //先保存这次函数的执行时间
            var now = Date.now();

            //接着判断是否需要在刚刚开始的时候执行函数
            if (!previous && options.leading === false) {
                //进到这里面说明就不需要
                previous = now;
            }

            //接着在获取到时间的差值
            var remaining = wait - (now - previous); //主要比较的就是两次函数的执行时间和预先设定的时间的差值

            //保存这个函数的上下文和参数
            context = this;
            args = arguments;

            //开始根据判断条件进行函数的调用
            if (remaining < 0 || remaining > wait) {
                //进入到这里就表示函数可以进行调用了
                //remaining < 0 一开始就要执行
                //remaining > wait 正常的执行条件

                if (timeout) {
                    //如果存在定时器，说明还有没有执行的定时器，清除掉
                    clearTimeout(timeout);
                    timeout = null;
                }

                //重置这次函数的执行时间，下次执行的时候需要判断
                previous = now;

                //执行函数
                result = func.apply(context, args);

                //重置变量，防止内存泄漏
                if (!timeout) {
                    context = args = null;
                }
            } else if (!timeout && options.trailing !== false) {
                //最后一次需要出发的情况
                timeout = setTimeout(later, remaining);
            }

            //返回结果
            return result;
        }
    }
    Public.prototype.debounce = function(func, wait, immedicate) { //函数去抖
        /*
        参数的基本解释：
          func: function 需要进行去抖的函数
          wait： 去抖时间
          immedicate： 设置去抖函数的触发时机，设置为true则事件发生的时候立即触发。否则在事件结束wait时间之后触发
      */

        //设置几个需要用到的局部变量
        var context, //存储this
            args, //存储传递给去抖函数的参数
            timestamp, //存储每次函数触发的时间
            timeout, //存储对定时器的引用
            result; //存储原函数的返回值

        //主要就是这个函数，这个函数就是定时器调用的函数，我们需要在这个函数里面做一件十分重要的事就是判断函数触发的时机

        var later = function() {

            //首先获取时间差
            var last = Date.now() - timestamp;

            //再看一下有没有达到函数调用的时间
            if (last < wait && last >= 0) {
                //重置函数调用
                timeout = setTimeout(later, wait - last);
            } else {
                //说明可以调用函数了，
                //吧timeout设置为null，以便下次判断
                timeout = null;
                //但是需要先判断一下immedicate，因为如果这个为true，则我们不需要调用了
                if (!immedicate) {
                    //说明不是立即调用
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                }
            }
        }

        return function() {
            //闭包的形式，方便传递参数
            context = this;
            args = arguments;

            //每次函数调用的时间
            timestamp = Date.now();

            var callNow = immedicate && !timeout; //immedicate为true且函数不是第一次调用

            if (!timeout) {
                //如果能进到这里，表示的是这个函数不是第一次触发了
                //如果是第一次触发，我们需要调用定时器了
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                //如果是立即调用，就直接调用func函数
                result = func.apply(context, args);
                context = args = null; //释放资源
            }
            return result;
        }
    }
    Public.prototype.trim = function(str) { //去除空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    Public.prototype.scrollingLoads = function(fn, container) { //fn执行方法 ，container加载的容器   滚动加载...
        window.onscroll = function() {
            var nScrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条高度
            var winH = document.body.clientHeight; //页面可视区域高度
            var nScrollHight = document.querySelectorAll(container)[0].scrollHeight; //div高度
            var aa = (nScrollHight - winH - nScrollTop) / winH;
            if (aa < 1) {
                fn();
            } else {
                return;
            }
        };
    }
    Public.prototype.verifyText = function(container) { //container 容器 验证
        var i = 0,
            _this = this,
            children = document.querySelectorAll(container)[0].children,
            l = children.length,
            obj = {};
        for (i = 0; i < l; i++) {
            var
                c = children[i],
                flag = c.dataset.flag, //是否必填
                max = c.dataset.max, //输入最多字符数
                type = c.dataset.type, //验证的类型
                tips = c.placeholder, //提示信息
                verify = c.dataset.verify,
                n = c.name,
                v = c.value;
            if (verify != undefined) {
                if (flag && v.length == 0) {
                    _this.alert(tips);
                    return false;
                }
                if (max != 'undefined' || max != undefined) {
                    if (v.length > max) {
                        _this.alert(tips);
                        return false;
                    }
                }
                if (type != 'undefined' || type != undefined) {
                    if (v.length != 0) {

                        if (type == 'isMobile' && !_this.isMobile(v)) { //验证手机号码
                            _this.alert(tips);
                            return false;
                        }
                        if (type == 'ispositivenum' && !_this.ispositivenum(v)) { //验证码正整数
                            _this.alert(tips);
                            return false;
                        }
                    }
                }
                obj[n] = v;
            }
        };
        return obj;
    }
    Public.prototype.urlJsonLsit = function(obj) { //对象转为url字符串形式
        return Object.keys(obj).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
        }).join('&');
    }
    window.Public = new Public();
}(window);


//requestAnimationFrame的兼容性处理
;
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };

})()

Date.prototype.format = function(format) { //根据时间戳拼接日期时间按格式  new Date(time).format('MM-dd/hh:mm');
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
