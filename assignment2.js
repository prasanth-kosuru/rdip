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








/* validation */

function validate() {

  var no = myform2.mobile.value;

  var phone = /^\d{10}$/;

  if (no.match(phone)) {

  } else {

    alert("You have entered an invalid mobile number");

    return false;

  }

  var x = myform2.email.value;



  var pos1 = x.indexOf("@");

  var pos2 = x.lastIndexOf(".");

  if (pos1 < 1 || pos2 < pos1 + 2 || pos2 + 2 >= x.length) {

    alert("You have entered an invalid email id:");

    return false;

  }



  var name = myform2.name.value;

  if (!isNaN(name.charAt(0))) {

    alert("First character Cannot be a number.");

  }

}






/*anagram*/

function anagram() {

  var one = myform1.first.value;

  var two = myform1.second.value;

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


/*palindrome*/

 function palindrome() {

  var string = myform1.single.value;

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


