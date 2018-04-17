"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  import Person from "./person"
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "Name", {
        //----------------------- accesors ----------------------------
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
/*-----------------------------------------------------------------
                             EMPLOYEE
-----------------------------------------------------------------*/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, hireDate, salary) {
        if (name === void 0) { name = ""; }
        if (hireDate === void 0) { hireDate = ""; }
        if (salary === void 0) { salary = ""; }
        var _this = _super.call(this, name) || this;
        _this.hireDate = hireDate;
        _this.salary = salary;
        return _this;
    }
    ;
    Object.defineProperty(Employee.prototype, "HireDate", {
        //----------------------- accesors ----------------------------
        get: function () {
            return this.hireDate;
        },
        set: function (val) {
            this.hireDate = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Salary", {
        get: function () {
            return this.salary;
        },
        set: function (val) {
            this.salary = val;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}(Person)); //Employee
var emp1 = new Employee();
emp1.Name = "Jhon Doe";
emp1.HireDate = "10-02-2015";
emp1.Salary = "$1000";
var emp2 = new Employee();
emp2.Name = "Mary Jane";
emp2.HireDate = "01-11-2013";
emp2.Salary = "$850";
var emp3 = new Employee();
emp3.Name = "Michael Stuart";
emp3.HireDate = "23-07-2012";
emp3.Salary = "$1450";
var arrEmployee = [emp1, emp2, emp3];
function generate_employee_table() {
    var table = document.getElementById("employees");
    try {
        for (var i = 0; i < arrEmployee.length; i++) {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            for (var j = 0; j < 4; j++) {
                cell1.innerHTML = arrEmployee[i].Name;
                cell2.innerHTML = arrEmployee[i].HireDate;
                cell3.innerHTML = arrEmployee[i].Salary;
                cell4.innerHTML = '<input id="Button" type="button" value="delete" onclick="deleteEmployee()" />';
            }
        }
    }
    catch (err) {
        alert(err);
    }
}
function deleteEmployee() {
    var oRows = document.getElementById('employees').getElementsByTagName('tr');
    var iRowCount = oRows.length;
    if (iRowCount > 1)
        document.getElementById("employees").deleteRow(0);
    else
        alert('Last row');
    return;
}
/*-----------------------------------------------------------------
                             CUSTOMER
-----------------------------------------------------------------*/
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, contractNumber) {
        if (name === void 0) { name = ""; }
        if (contractNumber === void 0) { contractNumber = ""; }
        var _this = _super.call(this, name) || this;
        _this.contractNumber = contractNumber;
        return _this;
    }
    ;
    Object.defineProperty(Customer.prototype, "ContractNumber", {
        //----------------------- accesors ----------------------------
        get: function () {
            return this.contractNumber;
        },
        set: function (val) {
            this.contractNumber = val;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}(Person)); //Customer
var arrCustomer = [];
function generate_customer1_table() {
    var table = document.getElementById("customers");
    try {
        for (var i = 0; i < arrCustomer.length; i++) {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            for (var j = 0; j < 2; j++) {
                cell1.innerHTML = arrCustomer[i].Name;
                cell2.innerHTML = arrCustomer[i].ContractNumber;
            }
        }
    }
    catch (err) {
        alert(err);
    }
}
function addCustomer() {
    var name = document.getElementById("custName").value;
    var contractNo = document.getElementById("custContr").value;
    if (name == null || name.trim() == "" || contractNo == null || contractNo.trim() == "") {
        alert("Incorect Data");
        return;
    }
    else {
        arrCustomer.push(new Customer(name, contractNo));
        generate_customer1_table();
    }
}
