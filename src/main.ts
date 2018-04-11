class Person{
    constructor(private fullName: string) {}
    get name() {
        return this.fullName;
    }
}

class Employee extends Person {
    constructor(fullName: string, private employeeHireDate: Date, private employeeSalary: number, private employeeId: number){
        super(fullName);
    }
    get hireDate() {
        let date: Date = this.employeeHireDate;
        let day: string = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
        let month: string = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
        return `${day}-${month}-${date.getFullYear()}`;
    }
    get salary() {
        return this.employeeSalary;
    }

    get id() {
        return this.employeeId;
    }
}

class Customer extends Person {
    constructor(fullName: string, private customerContractnumber: number){
        super(fullName);
    }
    get contractNumber() {
        return this.customerContractnumber;
    }
}

let employeesArray: Employee[] = [ 
    new Employee('Ion', new Date(1999, 8, 1), 1200, 0), 
    new Employee('Eugen', new Date(2008, 3, 5), 120, 1), 
    new Employee('Gheorhe', new Date(1900, 10, 5), 100, 2),
    new Employee('Victor', new Date(2017, 10, 23), 1100, 3) ];

let customersArray: Customer[] =[
    new Customer('Igor', 9785473), new Customer('Vladimir', 54651651), new Customer('Vasile', 12342141), new Customer('Tudor', 768463) ];

let  loadEmployees= () => {
    document.getElementById("employees-table").innerHTML = employeesArray.reduce((acc, elem) => {
        return acc + 
        `<tr>
            <td>${elem.name}</td>          
            <td>${elem.hireDate}</td>          
            <td>${elem.salary}</td>          
            <td><button id="${elem.id}" onclick="deleteEmployee(event)">delete</button></td>        
        </tr>`
    }, 
    `<table id="employee-table">
    <tr>
        <th>Employee &nbsp</th>
        <th>Hire Date &nbsp</th>
        <th>Salary &nbsp</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><input type="text" id="employee-name"></td>            
        <td><input type="date" id="hire-date"></td>
        <td><input type="number" id="salary"></td>
        <td ><button onclick="addEmployee()">add</button></td>
    </tr>
    </table>`)
}


let loadCustomers = () => {
    document.getElementById("customers-table").innerHTML = customersArray.reduce((acc, elem) => {
        return acc + 
        `<tr>
            <td>${elem.name}</td>          
            <td>${elem.contractNumber}</td>                          
        </tr>`
    }, 
    `<table id="customers-table">
    <tr>
        <th>Customer &nbsp</th>
        <th>Contract Number &nbsp</th>
        <th>Actions &nbsp</th>
    </tr>
    <tr>
        <td><input type="text" id="customer-name"></td>            
        <td><input type="number" id="contract-number"></td>
        <td ><button onclick="addCustomer()">add</button></td>
    </tr>
    </table>`)
}

let deleteEmployee = (event) => {
    if(employeesArray.length < 2) {
        alert(`Can't delete last elemetnt`)
        return;
    }
    employeesArray.forEach((elem, index) => {
        if(event.target.id == elem.id){
            employeesArray.splice(index, 1);
        }
    })
    loadEmployees();
}

let addEmployee = () => {
    let name = (<HTMLInputElement>document.getElementById("employee-name")).value;
    let hireDate = (<HTMLInputElement>document.getElementById("hire-date")).value;
    let salary = +(<HTMLInputElement>document.getElementById("salary")).value;
    let id = employeesArray[employeesArray.length-1].id+1;
    if (!name || !hireDate || !salary) {
        alert('Please insert value in all fields or number in Salary field')
        return;
    }
    employeesArray.push(new Employee(name, new Date(hireDate), salary, id))
    loadEmployees();
}

let addCustomer = () => {
    let name = (<HTMLInputElement>document.getElementById("customer-name")).value;
    let number = +(<HTMLInputElement>document.getElementById("contract-number")).value;
    if (!name || !number) {
        alert('Please insert value in all fields or number in Contract Number field')
        return;
    }
    customersArray.push(new Customer(name, number));
    loadCustomers();
}