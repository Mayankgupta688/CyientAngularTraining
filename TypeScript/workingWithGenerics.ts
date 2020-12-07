function addData<T>(a: T, b: T): T {
    console.log(a);
    return a
  }
  
  var result = addData(1, 2);
  
  console.log(addData("Hello ", "W"));
  console.log(addData(false, true));
  console.log(addData(1, 2));
  
  