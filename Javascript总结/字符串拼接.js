var html='';
for(var i=0,l=items.length;i<l;i++){
	var item = items[i]
	var itemHtml = ''+
		'<li>'+
			'<a href="/'+item.id+'"'+
			'</a>'
	html+=itemHtml
}