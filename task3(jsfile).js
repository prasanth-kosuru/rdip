
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



