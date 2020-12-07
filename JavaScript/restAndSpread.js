function addData(a, b, ...c) {
    console.log(a + b + c)
}

var resultArray = [10, 20, 30, 40, 50, 60]

addData(resultArray[0], resultArray[1], resultArray[2])

// is same as: 

addData(...resultArray)