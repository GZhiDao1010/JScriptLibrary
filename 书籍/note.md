二叉树和二叉查找树:
	二叉树每个节点的子节点不允许超过两个,将子节点的个数限定为 2，可以写出高效的程序在树中插入、查找和删除数据。
	二叉查找树是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。
三种遍历 BST 的方式：中序、先序和后序。
<script>
//二叉查找树（BST）
function Node(data,left,right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}
function show(){
	return this.data;
}
function BST(){
	this.root =null;
	this.insert = insert;
	this.inOrder = inOrder;
}
function insert(data){
	var n = new Node(data,null,null);
	if(this.root == null){
		this.root = n;
	}else{
		var current = this.root;
		var parent;
		while(true){
			parent =current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}else{
				current = current.right;
				if(current == null){
					parent.right = ;
					break;
				}
			}
		}
	}
	
}
//BST 的中序遍历
function inOrder(node){
	if(!(node ==null)){
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}
</script>