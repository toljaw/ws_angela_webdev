var a = prompt("Whats your variable 'a'?");
var b = prompt("Whats your variable 'b'?");

var c = 0 ;
c = a;
a = b;
b = c;

alert(`After "a" and "b" have been switched, your "a" is ${a} and your "b" is ${b}.`);