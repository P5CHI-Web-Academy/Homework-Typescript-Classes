class Person{
    private name:string;
    private surname:string;

    
    constructor(_name:string,_surname:string){
        this.name=_name;
        this.surname=_surname;
    }

    get fullname(){
        return `${this.name} ${this.surname}`;
    }
}


class Employee extends Person{

    private salary:number;
    private hire_date:string;

    constructor(_name:string,_surname:string,_salary:number,_hire_date:string){
        super(_name,_surname);
        this.salary=_salary;
        this.hire_date=_hire_date;
    }

    get full_salary(){
        return `$${this.salary}`;
    }

    get full_hire_date(){
        return `${this.hire_date}`;
    }

    public  showEmployee(employees){
        let html='';
        for (let employee of employees){
            html+=`<tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td><a href='#'>Delete</a></td>
            </tr>` ;
        };

        let employeeEl= document.getElementById('list_employee');
        employeeEl.innerHTML=html;
    }

    deleteEmployee(){
        
    }

}

let emp = new Employee('Dmitri','Zabiaco',10000,'12-10-2018');
let employees= [
    ['Jhon Doe','10-02-15','$1000'],
    ['Mary Jane','01-11-2013','$850'],
    ['Michael Stuart','27-07-2012','$1450']
];

emp.showEmployee(employees);

var link_delete= document.querySelectorAll('#employee a');
let table_employee= document.getElementById('employee');


for(let link of link_delete){
    link.addEventListener('click',function(e){
        let row = document.querySelectorAll('#list_employee tr');
        let $this = e.currentTarget;
        let parent = $this.parentNode.parentNode;
        console.log(row.length);
        if (row.length > 1) {
            parent.outerHTML = '';
        }
    });
}


class Customer extends Person{
    private contact_number:number;
    constructor(_name:string,_surname:string,_contract_number:number){
         super(_name,_surname);
         this.contact_number=_contract_number;
    }
 
    get full_contract_number(){
        return this.contact_number;
    }

    public  show_customers(customers){
        let html = '';
        for (let customer of customers) {
            html += `<tr>
                <td>${customer[0]}</td>
                <td>${customer[1]}</td>
            </tr>`;
        }
        let customerEl = document.getElementById('list_customer');
        customerEl.innerHTML = html;

    };

}

let cus = new Customer('Dmitri','Zabiaco',777);

let customers = [
    ['Martin Black',123456789],
    ['Hannah Travis',654876123],
    ['Sam Tracy',548751542],
];
cus.show_customers(customers);


let add_link = document.getElementById('add_cus');
let cus_name= document.getElementById('cus_name');
let cus_no = document.getElementById('cus_no');
add_link.addEventListener('click',function(){
    customers.push([cus_name.value,cus_no.value]);
    cus.show_customers(customers);
});
    
