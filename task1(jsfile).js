
function add(){
first = parseInt(myform.first.value);
second = parseInt(myform.second.value);
var result = first + second;
return result + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Addition of two numbers)";
}


function sub(){
first = parseInt(myform.first.value);
second = parseInt(myform.second.value);
var result = first - second;
return result + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(subtraction of two numbers)";
}


function mul(){
first = parseInt(myform.first.value);
second = parseInt(myform.second.value);
var result = first * second;
return result + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(multiplication of two numbers)";
}


function div(){
first = parseInt(myform.first.value);
second = parseInt(myform.second.value);
var result = first / second;
return result + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(division of two numbers)";
}


function per(){
first = parseInt(myform.first.value);
second = parseInt(myform.second.value);
var result = (first/100)*second;
return result + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(first percentage of second numbers)";
}


function abso(){
x = parseInt(myform.single.value);
  if (x < 0) {
    x = x * -1;
}

return x+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(first percentage of second numbers)";
}

 
 function sqrtroot(){
 var x =parseInt( myform.single.value);
var r1 = Number.isInteger(x);
  if (r1 == false) {
    x = r1.toFixed(3);
  } 
  else {
    x = x;
  }
  
  ans = Math.sqrt(x);
return ans +"&nbsp&nbsp&nbsp&nbsp (square root of the given number)";
}

