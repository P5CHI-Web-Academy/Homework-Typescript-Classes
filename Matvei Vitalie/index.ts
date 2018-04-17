//  import Person from "./person"
class Person{
    protected name: string;

    protected constructor(name: string){this.name = name;}
   
    //----------------------- accesors ----------------------------
    get Name() {
        return this.name;
    }
    set Name(val:string) {
        this.name = val;
    }
}

/*-----------------------------------------------------------------
                             EMPLOYEE
-----------------------------------------------------------------*/
class Employee extends Person{
    private hireDate: string;
    private salary: string;

    constructor(name: string = "", hireDate: string  = "", salary: string = ""){
        super(name);
        this.hireDate = hireDate;
        this.salary = salary;
    };
    
    //----------------------- accesors ----------------------------
    get HireDate() {
        return this.hireDate;
    }
    set HireDate(val:string) {
        this.hireDate = val;
    }

    get Salary() {
        return this.salary;
    }
    set Salary(val:string) {
        this.salary = val;
    }
 }//Employee


let emp1 = new Employee();
emp1.Name = "Jhon Doe";
emp1.HireDate = "10-02-2015";
emp1.Salary = "$1000";

let emp2 = new Employee();
emp2.Name = "Mary Jane";
emp2.HireDate = "01-11-2013";
emp2.Salary = "$850";

let emp3 = new Employee();
emp3.Name = "Michael Stuart";
emp3.HireDate = "23-07-2012";
emp3.Salary = "$1450";

var arrEmployee = [emp1, emp2, emp3];

function  generate_employee_table(){
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("employees");

    try{
        for(var i = 0; i < arrEmployee.length; i++){
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            
            for(var j = 0; j < 4; j++){
                cell1.innerHTML = arrEmployee[i].Name;
                cell2.innerHTML = arrEmployee[i].HireDate;
                cell3.innerHTML = arrEmployee[i].Salary;
                cell4.innerHTML = '<input id="Button" type="button" value="delete" onclick="deleteEmployee()" />';
            }    
        }
    }catch(err){
        alert(err);
    }
}
function deleteEmployee() {
    var oRows = document.getElementById('employees').getElementsByTagName('tr');
    var iRowCount = oRows.length;

    if(iRowCount > 1)
        document.getElementById("employees").deleteRow(0);
    else
        alert('Last row');
        return;
}

/*-----------------------------------------------------------------
                             CUSTOMER
-----------------------------------------------------------------*/
class Customer extends Person{
    private contractNumber: string;
    
    constructor(name: string = "", contractNumber: string  = ""){
        super(name);
        this.contractNumber = contractNumber;
    };

    //----------------------- accesors ----------------------------
    get ContractNumber() {
        return this.contractNumber;
    }
    set ContractNumber(val:string) {
        this.contractNumber = val;
    }
}//Customer

var arrCustomer = [];
function  generate_customer1_table(){
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("customers");

    try{
        for(var i = 0; i < arrCustomer.length; i++){
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            
            for(var j = 0; j < 2; j++){
                cell1.innerHTML = arrCustomer[i].Name;
                cell2.innerHTML = arrCustomer[i].ContractNumber;
            }    
        }
    }
    catch(err){
        alert(err);
    }
}
function  addCustomer() {
    var name = document.getElementById("custName").value
    var contractNo = document.getElementById("custContr").value;
 
    if(name == null || name.trim()=="" || contractNo == null || contractNo.trim()==""){
        alert("Incorect Data");
         return;
        }
    else{
        arrCustomer.push(new Customer(name, contractNo));
        generate_customer1_table();
    }
}

        