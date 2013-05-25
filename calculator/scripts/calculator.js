function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	
	
	this.expression='';     //���݂̌v�Z�@������킷�v���p�e�B
	
	this.getExpression = function(){
	
		return this.expression;
		
	}	
	
	this.append = function(ch){      //�v�Z�@���ێ����Ă��鎮��1�����ǉ�����
		
		return this.expression += ch;
		
	};	
	
	this.clearEntry = function(){
		
		return this.expression = this.expression.substring(0,this.expression.length-1);
	
	};
	
	this.clear = function(){
		return this.expression = ""
	
	};
	
	this.calculate = function(){
		this.expression = this.expression.replace("�~","*");
		this.expression = this.expression.replace("��","/");
		this.expression = eval(this.expression);
	    
	};
	
}
