�������Ͷ��������:
	������ÿ���ڵ���ӽڵ㲻����������,���ӽڵ�ĸ����޶�Ϊ 2������д����Ч�ĳ��������в��롢���Һ�ɾ�����ݡ�
	�����������һ������Ķ���������Խ�С��ֵ��������ڵ��У��ϴ��ֵ�������ҽڵ��С�
���ֱ��� BST �ķ�ʽ����������ͺ���
<script>
//�����������BST��
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
//BST ���������
function inOrder(node){
	if(!(node ==null)){
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}
</script>