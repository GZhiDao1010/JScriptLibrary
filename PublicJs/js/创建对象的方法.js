var DataDeal = {
		formToJson:function(data){
			data=data.replace(/&/g,"\",\"");
			data=data.replace(/=/g,"\":\"");
			data="{\""+data+"\"}";
			return data;
		},
		submitForm:function(){
			var data = $("#form").serialize();//获取表单值
			data= decodeURIComponent(data,true);//防止中文乱码
			var json = DataDeal.formToJson(data);//转化为json
			console.log('json='+json)
		}
	};
	
	// 字面量对象
	var my_object = null;
	var my_object = {
		'name':'李小强',
		'age':'26岁',
		'height':'165cm',
		'weight':'55KG',
		'phone':'15902042654',
		'address':'惠州小金口金和苑',
		"cando":function(){
			console.log('我能做什么呢？')
		}
	};
	my_object.cando()
	var status = my_object.name || 'unknow';
	my_object.like = '我是新加的技能';
	console.log(my_object);
	/*my_object2.prototype.method_name = function(first_argument) {
		// body...
	};*/
	my_object.add_can = {
		add_can:function(){
			console.log('新加入的方法')
		}
	}
	my_object.name = '李小强2'
	my_object.add_can.add_can();
	console.log(my_object);

	//给对象增加一个方法create使用原对象作为其原型的新对象
	if(typeof my_object.beget !== 'function'){
		my_object.create = function (o){
			var F = function (){
				F.prototype = 0;
				return new F();
			}
		}
	}
	// var other_object = my_object.create(beget)
	console.log(my_object);
	//console.log(typeof my_object.add_can);
	//console.log(my_object.hasOwnProperty('object'));

	var i;
	var properties =[
		'name',
		'age'
	];
	var my_object1 = {
		'name':'**强',
		'age':'16岁',
		'height':'1265cm',
		'weight':'552KG',
		'phone':'159***42654',
		'address':'惠州***苑',
		"cando":function(){
			console.log('我能做什么呢？')
		}
	};
	console.log('my_object.length=='+properties.length)
	for(i=0;i < properties.length;i++){
		console.log(properties[i]+':'+my_object[properties[i]]);
	}
	//减少全局污染
	var MYAPP ={};
	MYAPP.project1 = {
		'age':18,
		'name':'xiaoping'
	};
	MYAPP.project2 = {
		number:15,
		depaert:{
			age:255,
			name:'lijl'
		}
	}
	console.log(MYAPP.project2.depaert.age);


	// 函数
		//编程，就是将需求分解变成一组函数与数据结构的技能
		//javascript是一门基于原型继承的语言；
		//javascript 是一门函数式的面向对象编程语言，所有函数开源拥有方法
	// 函数对象
		/***
		1.对象字面量产生的对象连接到Object.prototype
		2.函数对象连接到Function.prototype
		3.每个函数创建时都会两个隐藏属性：函数的上下文和实现函数行为的代码
		4.函数对象在创建时会配有一个prototype属性，它的值是一个拥有constructor属性且值为该函数的对象
		***/
	// 函数字面量
	var add = function(a,b){ //匿名函数
		return a+b;
	}
	
	// 调用
	/*4种调用模式：
		方法模式调用、函数调用模式、构造器调用模式、apply调用模式
		（这些模式在如何初始化关键参数this上存在差异）

		*/
	//1.方法调用模式：
	var myproject = {
		value:0,
		increamt:function(ico){
			if(ico === 'number')  this.value += 1;
			else this.value += ico;
		}
		//this从对象中取值或修改，this可取得所属对象的上下文的方法
		//称为公共方法
	}
	myproject.increamt(3);
	console.log(myproject.value);
	//2.函数调用模式：
		//函数不是对象的属性时，就被当作一个函数来调用，以此模式调用函数时，this被绑定到全局对象
		//解决方法：that
		myproject.double = function(){
			var that = this; //解决了全局对象的问题
			var helper = function(){
				that.value = add(that.value,that.value);
			};
			helper();//函数形式调用helper
		};
		myproject.double();
		document.write(myproject.value);//6
	//3.构造器调用模式（不推荐）：
		//如果函数前面带上 new 来调用，那么会创建一个连接到该函数的prototype成员新对象，同时this会被绑定到那个新对象上。
		var Quo = function (string){
			this.status = string;
		}
		Quo.prototype.get_status = function (){
			return this.status;
		}
		//构造一个	Quo事例
		var myQuo = new Quo('confused');
		console.log(myQuo.get_status());
	//4.apply调用模式
		//apply方法让我们构建一个参数数组传递给调用函数，允许我们选择this的值，apply(要绑定给this的值,一个参数数组)；
	//构造一个包含两个数字的数组，并将它们相加
	var array = [3,5];
	var sum = add.apply(null,array);//sum=8
	//构造一个包含 status 成员对象
	var statusObject = {
		status:'a-ok'
	};
	//statusObject并没有继承自Quo.prototype,但我们可以在statusObject上调用get_status 方法
	var status = Quo.prototype.get_status.apply(statusObject);//a-ok



	// 参数
	//函数被调用时，会得到一个配送的参数，那就是argument数组（不是真正的数组）
	var sum = function(){
		var i=0,sum=0;
		for(i=0;i<arguments.length;i+=1){
			sum+=arguments[i];
		}
		return sum;
	};
	console.log(sum(5,7,8,9,22,44));
	// 返回
	/*
	return 使函数提前返回，不再执行余下的语句
	一个函数总会返回一个值，没有指定则返回undefined
	函数调用时在前面+new前缀，且返回值不是一个对象，则返回this(该新对象)*/
	// 异常
	//程序抛出异常
	var add = function(){
		if(typeof a !== 'number' || typeof b !== 'number'){
			throw{
				name:'TypeError',
				message:'add need number'
			};
		}
		return a+b;
	};
	var  try_it = function(){
		try{
			add('seven')
		} catch(e){
			console.log(e.name + ':'+e.message);
		}
	}
	try_it();//try出现异常，则跳转到catch从句


	var test = {
		value:0,
		sum:function(a,b){
			return a+b;
		}
	};
	test.try_it2 = function(){
		value2:1,
		a = 123; //局部变量
		console.log(this);//test 对象
		console.log(this.sum(a,5)) //128
		console.log(this.value) //0
	};
	//console.log(test.value2);//value2 not defined
	//console.log('a==='+a);//a not defined
	var try_it2 = function(){
		console.log(this) //全局对象
		
	};
	//创建对象的7种模式
	//1.工厂模式
	function createPersonal(name,age,job){
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.doWhate = function(){
			console.log(this.job)
		}
		return o;
	}
	var personal1= createPersonal('李强',11,'web');
	personal1.doWhate();//web
	//2.构造函数模式
	function createPersonal2(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
		this.doWhate = function(){
			console.log(this.name)
		}
	}
	var personal2 = new createPersonal2('LXQ',11,'web');
	personal2.doWhate();//LXQ
	console.log(personal2 instanceof Object);//true  检测类型
	//问题：1.每个方法都要在每个实例上重新创建一遍
	//		>>过把函数定义转移到构造函数外部来解决这个问题
	function createPersonal3(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
		this.doWhate = doWhate;
	}
	function doWhate(){
		console.log(this.age);
	}
	var personal3 = new createPersonal3('xxx',213,'web');
	personal3.doWhate();//213
	doWhate();//undefined
	//3.原型模式
	//每个函数都有一个prototype(原型)属性，这个属性是指针，指向对象
	//prototype就是通过调用构造函数而创建的那个对象事例的原型对象
	//所有的原型对象都会自动获得一个constructor(构造函数)属性
	function test(){
		console.log(111)
	}
	function Personal4(){};
	Personal4.prototype.name = 'lxq222';
	Personal4.prototype.age= 313;
	Personal4.prototype.job = 'web';
	Personal4.prototype.sayName = function(){
		console.log(this.name);
		//test()
	}
	var personal5 = new Personal4();
	personal5.sayName();
	console.log(personal5.hasOwnProperty('name'));//检测属性是否存在于实列还是原型中
	//更简单的原型语法
	function Personal6(){};
	
	Personal6.prototype = {
		name:document.getElementById("test").value,
		age:'132',
		obej:'web',
		sayName:function(){
			console.log(this.name)
		}
	}
	var personal7 = new Personal6();
	personal7.sayName();

	Personal6.prototype.startsWith = function (text) {
    	return this.indexOf(text) == 0;
	};
	var msg = "Hello world!";
	console.log(msg.startsWith("Hello")); //true


	Personal6.prototype.startsWith2 = function () {
    	console.log(this.name)
	};
	personal7.startsWith2(); //lxq123

	//原型的动态性
	// 重设构造函数，只适用于 ECMAScript 5  兼容的浏览器
	// Object.defineProperty(Person.prototype, "constructor", {
	//     enumerable: false,
	//     value: Person
	// });
	/*var friend2 = new Person();
	Person.prototype.sayName = function(){
		console.log('HI');
	}
	friend2.sayName();*/
	//4.组合使用构造函数模式和原型模式(最广泛、认同度最高)
	function Myself(name,age,job){
		this.name = name;
		this.age = age;
		this.job = job;
		this.friends = [];
	}
	Myself.prototype = {
		//constructor:Myself,
		sayName:function(){
			console.log(this.friends);
		}
	}
	var Myself2 = new Myself('lxq',123,'web');
	var Myself3 = new Myself('LXZ',136,'JAVA');
	
	Myself2.gogo = function(){
		console.log(this.job)
	}

	Myself2.friends.push('啦啦啦');
	Myself2.sayName();
	console.log(Myself2.friends);
	Myself2.gogo()

	//5.动态原型模式
	function Person(name, age, job){
	//属性
	this.name = name;
	this.age = age;
	this.job = job;
	// 方法
		if (typeof this.sayName != "function"){
			Person.prototype.sayName = function(){
				console.log(this.name);
			};
		}
	}
	var friend = new Person("Nicholas", 29, "Software Engineer");
	friend.sayName();
	//6.寄生构造函数模式
	function Person(name, age, job){
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.sayName = function(){
			console.log(this.name);
		};
		return o;
	}
	var friend = new Person("Nicholas", 29, "Software Engineer");
	friend.sayName(); //"Nicholas"
	//除了使用 new 操作符并把使用的包装函数叫做构造函数之外， 这个模式跟工厂模式其实是一模一样的。
	//工厂模式为

	function createPerson(name, age, job){
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.sayName = function(){
			console.log(this.name);
		};
		return o;
	}
	var person1 = createPerson("Nicholas", 29, "Software Engineer");
	var person2 = createPerson("Greg", 27, "Doctor");

	//7.稳妥构造函数模式
	/*稳妥对象最适合在一些安全的环境中 （这些环境中会禁止使用 this 和 new ） ， 或者在防止数据被其他应用程序 （如 Mashup程序）改动时使用。
稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：
一是新创建对象的实例方法不引用 this ；
二是不使用 new 操作符调用构造函数。按照稳妥构造函数的要求，可以将前面的 Person 构造函数重写如下。*/
	function Person(name, age, job){
		//创建要返回的对象
		var o = new Object();
		//可以在这里定义私有变量和函数
		//添加方法
		o.sayName = function(){
			console.log('aaa');
		};
		//返回对象
		return o;
	}
	var friend = Person("123	", 29, "Software Engineer");
	friend.sayName(); //"Nicholas"

	//函数内部属性arguments和this
	//1.arguments是一个类数组对象，主要是保存函数参数，这个对象有个callee属性（指针，指向拥有这个arguments对象的函数）
	//事例：
	function box(a){
		if(a <=1){
			return 1;
		}else{
			//return num*box(num-1); 等于
			return num*arguments.callee(num-1);//使用callee来执行自身
		}
	}
	//2.this是函数所处的那个作用域，在全局作用域中this对象引用的就是window
	window.color ='red的';//或者是 var color = 'red的';
	console.log(this.color);//red的 （全局的）
	var box = {
		color:'绿色的', //局部
		color2:'绿色的2',
		sayColor:function(){
			console.log(this.color);
		}
	}	
	box.sayColor();//绿色的

	//如何把函数复制到对象里
	function sayColor2(){  //函数
		console.log(this.color2);
	}
	box.sayColor2 = sayColor2;
	box.sayColor2(); //绿色的2

	//函数的属性和方法length和prototype ，apply和call的真正用法
	//1.每个函数都有两个属性length和prototype
	/*
		length:接收命名参数的个数
	*/
	function test2(a,b){
		console.log(a+b);
	}
	console.log(test2.length);//2
	/*
		prototype:保存所有实例方法，也就是原型，有两个方法apply和call
		用途是：在特定的作用域中调用函数，等于设置函数体内this对象的值
		经常使用的地方是：扩展函数的作用域
	*/
	function test3(a,b){
		return a+b;
	}
	function sayBox(a,b){
		return test3.apply(this,[a,b]);
		//等价于
		return test3.apply(this,arguments);
		//等价于
		return test3.call(this,a,b);//a ,b直接传递给函数
	}
	console.log('sayBox=='+sayBox(10,10));

	//如何扩展函数的作用域
	var age = 18;
	var man = {
		age:88
	}
	function getMan(){
		console.log(this.age)
	}
	getMan();//18  作用域在window
	getMan.call(this);//18  作用域在window
	getMan.call(window);//18 作用域在window
	getMan.call(man); //88 作用域在box 对象冒充

	
	// 扩充类型的功能
	
	// 递归
	// 作用域
	// 闭包
	// 回调
	// 模块
	// 级联
	// 柯里化
	// 记忆
	