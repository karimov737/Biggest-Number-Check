var a = +prompt("Number 1 :")
var b = +prompt("Number 2 :")
var c = +prompt("Number 3 :")
console.log("Entered Numbers :", a, b, c);

var maxNumber

if (a >= b  && a >= c )
{
    maxNumber = a;
}
 else if (b >= a && b >= c)
 {
    maxNumber = b;
 }
else{
    maxNumber = c;
}
var maxNumber = prompt("Biggest Number is : ", maxNumber)

console.log("Biggest number is :", maxNumber);