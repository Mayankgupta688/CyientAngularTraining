var isAvailable: boolean = false;
var userAge: number = 10;

userAge = "100";
isAvailable = true;
isAvailable = "true";
console.log(isAvailable);


function addData(a: any, b: number): number {
    console.log(a + b);
    return a + b
}
  
var result = addData(1, 2);

var result = addData("Hello ", "World...");

var result = addData(true, true);

var result = addData("Hello ", true);

console.log(result)