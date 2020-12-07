function getDetails(name, age) {
    console.log("Hello " + name)
    console.log("Your age is: " + age)
}

var getDetailsArrow = (name, age) => {
    console.log("Hello " + name)
    console.log("Your age is: " + age)
}

getDetails("AMayank", 30)
getDetailsArrow("Mayank", 20);