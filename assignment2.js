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







 function palindrome() {

  var string = myform.single.value;

var i,

  str = "";

  for (i = string.length - 1; i >= 0; i--) {

    str += string[i];

  }

var num = str.localeCompare(string);

  if (num == 0) {

    alert("yes the string is a Palindrome");

   return true;

  } else {

 alert("No the string is not a  Palindrome");

    return false;

}



}









function anagram() {

  var one = myform.first.value;

  var two = myform.second.value;

  var a1 = one.toLowerCase();

  var a2 = two.toLowerCase();

  var arr = a1.split(" ").join("");

  var sorted = arr.split("").sort();

  var vip1 = sorted.join("");

  var arr = a2.split(" ").join("");

var sorted = arr.split("").sort();

  var vip2 = sorted.join("");

  var p = vip2.localeCompare(vip1);

  if (p != 0) {

    alert("No not an Anagram");

 return false;

  } else {

alert("Yes it is an Anagram");

 return true;

  }

}



