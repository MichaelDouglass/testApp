// Now we comment this out.
var a;
a = 5;
a++; // Count up
/*
Large comment
*/
if( a<50 ){
    // === exists (Strict equality for type too)
    // !==
    // != exists
    // condition here
    a ++;
}
alert(a);

var b = 10;
var c = 5;
//Big mistake here
if (c=b) {
    alert("This is always true!");
}

/*
Logic
&&
||
*/

var grade = "Premium";
switch ( grade) {
    case "Regular":
            alert("It's $3.15");
            break;
    case "Premium":
            alert("It's $3.45");
            break;
    case "Diesel":
            alert("It's $3.75");
            break;
    default:
            alert("That's no grade...")
            break;

}

function myFunction (a, b, c) {
    var d = a + b + c;
    alert("test the function: " + d);
}

myFunction(a, b, c);

for (var i = 1; i < 10; i++){
    alert("For loops are cool: " + i);
}

var j = 1;
do {
    // This always executes at least once
    j++;
} while ( j < 10);

// Good method here
var n = prompt("Gimme a numba!");
myNumber = Number(n);

if ( !isNaN(myNumber) ) {
    alert("It IS a number");
}
