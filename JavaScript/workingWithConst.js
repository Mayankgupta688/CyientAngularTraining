function createConstant() {
    const age = 20;
    age = age + 1;
} 

createConstant()

function createConstant() {
    const employeeDetails = {
        name: "Mayank",
        age: 21,
        designation: "Developer"
    };

    employeeDetails.name = "Anshul";

    employeeDetails = {
        name: "Ankit"
    }

    console.log(employeeDetails.name)
} 

createConstant()

function createConstant() {
    const employeeDetails = [10, 20, 30, 40];

    employeeDetails.push(50)

    employeeDetails[0] = 100;

    //employeeDetails = [10, 20, 30, 40, 50];

    console.log(employeeDetails.length)
} 

createConstant()


function createConstant() {
    let employeeDetails = {
        name: "Mayank"
    }

    Object.freeze(employeeDetails);

    employeeDetails.age = 30;

    employeeDetails.name = "Ankit";

    console.log(employeeDetails.name)

    console.dir(employeeDetails)
} 

createConstant()

