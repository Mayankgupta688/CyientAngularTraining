var userName: string = "Mayank";

interface IEmployee {
    empName: string;
    empAge: number;
    empSalary: number;
    empDesignation: string;
    empBonus?: number
}

var employeeOne: any = {
    name: "Mayank",
    empAge: 30,
    empDesignation: "Developer",
    empSalary: 3000
}

var employeeTwo: IEmployee = {
    empName: "Anshul",
    empAge: 20,
    empSalary: 4000,
    empDesignation: "",
    empBonus: 3000
}

var employeeThree: IEmployee = {
    empName: "Ankit",
    empSalary: 5000,
    empDesignation: "Manager",
    empAge: 4000,
    empBonus: 1000
}

var listOfEmployee: IEmployee[] = [];
listOfEmployee.push(employeeOne)
listOfEmployee.push(employeeTwo)
listOfEmployee.push(employeeThree)

for(let i = 0; i< listOfEmployee.length; i++) {
    console.log(listOfEmployee[i].empBonus ? listOfEmployee[i].empBonus: 1000)
}

function Employee(name, age) {
    
}