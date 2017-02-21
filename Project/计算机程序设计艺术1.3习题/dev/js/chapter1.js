var chapter1 = {};
chapter1.fn1 = function(){
	var g1 = ['a','b','c','d','e','f','g']; //转变为 [b,c,d,a];
	var g2 = [];
	var t=null;
	console.log(g1.length)
	var n = g1.length;
	for(var i=0;i < n - 1;i++){
		t = g1[i];
		g1[i] = g1[i+1];
		g1[i+1] = t;
	}
	console.log(g1);
}
chapter1.fn1();