function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    document.write("value of an alert is = "+a+ "<br>");
}

q1();

// question 3;

function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
}
q32();

// question 4;

var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4();

// question 5

var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

ans:two alert boxes appearred with value= 5 because inside the block we assign a=5.
And outside the block we assign a as value=2.