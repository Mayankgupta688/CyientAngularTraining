
// This is Class Creation...

class Employee {
    public empName: string;
    public empAge: number;
    public empDesignation: string;
    private empSalary: number;

    constructor(name: string = "Mayank", age: number = 10, designation: string = "Developer") {
        this.empName = name;
        this.empAge = age;
        this.empDesignation = designation
        if(age > 30) {
            this.empSalary = 40
        } else {
            this.empSalary = 50
        }
    }

    public getSalaryScale(): number {
        if(this.empSalary == 40) {
            return 1;
        } 

        return 2;
    }

    public getDetails(): void {
        console.log(`User Name is ${this.empName}, and age is  ${this.empAge}`)
    }

    getDesignation(): void {
        console.log(`Designation for ${this.empName} is ${this.empDesignation}`)
    }
}

var employeeOne = new Employee("Anshul");
employeeOne.getDetails()

var employeeTwo = new Employee("Ankit", 40, "Director");
employeeTwo.getDetails()
employeeTwo.getDesignation()
console.log(`Employee Salary Grade is ${employeeTwo.getSalaryScale()}`)
