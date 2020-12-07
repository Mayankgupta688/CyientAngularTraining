// JavaScript Hoisting

console.log(userInfo1);

salutationMessageOutput11()

newFunction();

var newFunction = function() {
    console.log("Hello World....")
}

function salutationMessageOutput11() {
    console.log("User Name is: " + userName);
    var userName = "Mayank";
}

var userInfo1 = "Mayank";