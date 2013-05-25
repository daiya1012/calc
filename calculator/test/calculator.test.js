test('constructor',function(){
/*	var c = new Calculator();
    ok( c instanceof Calculator, 'new演算子をつけてコンストラクタを呼び出す'); */
	
	c = Calculator();
    ok( c instanceof Calculator, 'new演算子をつけないでコンストラクタを呼び出す');
});	

test('getExpressionメソッドのテスト' , function(){
 	
 	var c = new Calculator();
 	
 	var result = c.getExpression();
 	
 	equal(result,'');
 	
});

test('appendメソッドのテスト' , function(){
 	
 	var c = new Calculator();
 	
 	var result = c.append("y");
 	
 	equal(result,'y');
 	
});
test('clearEntryメソッドのテスト' , function(){
 	
 	var c = new Calculator();
 	
 	var result = c.clearEntry();
 	
 	equal(result,'');
 	
});
test('clearメソッドのテスト' , function(){
 	
 	var c = new Calculator();
 	
 	var result = c.clear();
 	
 	equal(result,'');
 	
});
test('calculateメソッドのテスト' , function(){
 	
 	var c = new Calculator();
 	
 	var result = c.calculate();
 	
 	equal(result,'');
 	
});

