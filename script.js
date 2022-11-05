// # 1 :   Create two variables and alert their sum , multiplication , & divide  var1 by var2  and  see  if you get the desired output or not.

var multiplication = 5;
var divide = 6;
alert(multiplication*divide);
alert(multiplication/divide);


// # 2 :   Create a variable A and assign an integer value to it then increment the variable  and assign it to the new variable B.


var a = 8;
a++;
b = a;
console.log(b);


// # 3 :   Create a variable and assign  a string value  ‘Hello’ to it.  Take  the characters by using a  greater then (>) operator  to  check if the value of the left operand is greater than the right operator. If yes then it returns true else false.


var a = 'Hello';
b = 4;
console.log(a>b);


//  # 4 :  What Would be the results of the following statements below.?   Result must be in Boolean  .  
// console.log(10 > "5") 
// console.log(2 > true) 
// console.log(1 > false) 
// console.log(1 > "") 
// console.log('' == '0' ) 
// console.log(1 > " ") 
// console.log(1 > null)
// console.log(10 > "a") 
// console.log(10 > NaN)
// console.log(10 > undefined)          
// console.log(0 == '' )             
// console.log(a > 5 || b > 5) 
// console.log(0 == '0') 


var x = 10;
var y = '5';
console.log(x > y);

var c = 2;
var d = 'true';
console.log(c > d);

var e = 1;
var f = 'false';
console.log(e > f);

var g = 1;
var h = " ";
console.log(g > h);

var i = '';
var j = '0';
console.log(i == j);

var k = 1;
var l = " ";
console.log(k > l);

var m = 1;
var n = null;
console.log(m > n);

var o = 10;
var p = "a";
console.log(o > p);


var q = 10;
var r = NaN;
console.log(q > r);

var s = 10;
var t = undefined;
console.log(s > t);


var u = 0;
var v = '';
console.log(u == v);

var w = a>5;
var x = b>5;
console.log(w || x);

var y = 0;
var z = '0';
console.log(y == z);


// # 5 :  What  would be the output of the following code ? 

            let str="Hello";
            let num=100;
            console.log(str || num);

            // output Hello;


