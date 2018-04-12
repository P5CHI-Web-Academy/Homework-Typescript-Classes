class Person {
    private name: string;
    
    get fullName(): string {
            return this.name;
    }

    set fullName(value: string) {
          this.name = value;
    }     
}


class Employee extends Person {

    private hireDate: any;
    private salary: number = 0;
    listOfEmployees: Array<object> = [
        {
            name: "Mihai",
            hire_date: "23-04-2018",
            salary: 5000

        },
        {
            name: "Sandu",
            hire_date: "20-02-2017",
            salary: 2000

        },
        {
            name: "Marin",
            hire_date: "10-02-1990",
            salary: 10000

        },

    ];
   
    get newSalary(): number {
        return this.salary;
    }
    
    set newSalary(value: number) {
        this.salary = value;
    }

    get hire_date(): any {
        return this.hireDate;
    }

    set hire_date(value: any) {
        this.hireDate = value;
    }

    public displayEmployees() {

        for(let val of this.listOfEmployees) {
            const table = document.getElementById('employees');
            const id =  0;
            const tr1 = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');

            td1.innerHTML = val.name;
            td2.innerHTML = val.hire_date;
            td3.innerHTML = val.salary;
            td4.innerHTML = '<td><button name="button" onclick="deleteEmployee()">delete</button></td>';

            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.setAttribute('id', this.listOfEmployees.length -1);
            table.appendChild(tr1);

            
        } 

    }

    public deleteEmployee() {

        if(this.listOfEmployees.length > 1) {
            this.listOfEmployees.splice(-1, 1);
        }
      
    }
}

const employee = new Employee();
employee.displayEmployees();


class Costumer extends Person {

    private contract: number;
    public listOfCostumers: Array<any> = [];

    constructor(){
        super();
        let btn = document.getElementById("add");
        btn.addEventListener("click", (e:Event) => this.addCostumer());
    }
    get getContract() {
        return this.contract;
    }

    public addCostumer() {

      const costumer = document.getElementById('costumer_name').value;
      const contract_number = document.getElementById('costumer_contract').value;
      if(costumer !== "" && contract_number !== "") {
          const table = document.getElementById('costumer');

            const tr1 = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');

            td1.innerHTML =costumer;
            td2.innerHTML = contract_number;
            
            tr1.appendChild(td1);
            tr1.appendChild(td2);

            table.appendChild(tr1);
      } else {
           console.log('Costumer field and Contract field are empty');
      }
            
    }

}

const costumer = new Costumer();
