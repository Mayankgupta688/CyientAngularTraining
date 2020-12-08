
// This is Class Creation...

class Employee {
    empName: string;
    empAge: number;
    empDesignation: string;

    constructor(name: string = "Mayank", age: number = 10, designation: string = "Developer") {
        this.empName = name;
        this.empAge = age;
        this.empDesignation = designation
    }

    getDetails() {
        console.log(`User Name is ${this.empName}, and age is  ${this.empAge}`)
    }

    getDesignation() {
        console.log(`Designation for ${this.empName} is ${this.empDesignation}`)
    }
}

var employeeOne = new Employee("Anshul");
employeeOne.getDetails()

var employeeTwo = new Employee("Ankit", 40, "Director");
employeeTwo.getDetails()
employeeTwo.getDesignation()
