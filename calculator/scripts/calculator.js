function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	
	
	this.expression='';     //現在の計算機をあらわすプロパティ
	
	this.getExpression = function(){
	
		return this.expression;
		
	}	
	
	this.append = function(ch){      //計算機が保持している式に1文字追加する
		
		return this.expression += ch;
		
	};	
	
	this.clearEntry = function(){
		
		return this.expression = this.expression.substring(0,this.expression.length-1);
	
	};
	
	this.clear = function(){
		return this.expression = ""
	
	};
	
	this.calculate = function(){
		this.expression = this.expression.replace("×","*");
		this.expression = this.expression.replace("÷","/");
		this.expression = eval(this.expression);
	    
	};
	
}
