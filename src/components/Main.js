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
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.salary = 0;
        _this.listOfEmployees = [
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
        return _this;
    }
    Object.defineProperty(Employee.prototype, "newSalary", {
        get: function () {
            return this.salary;
        },
        set: function (value) {
            this.salary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "hire_date", {
        get: function () {
            return this.hireDate;
        },
        set: function (value) {
            this.hireDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.displayEmployees = function () {
        for (var _i = 0, _a = this.listOfEmployees; _i < _a.length; _i++) {
            var val = _a[_i];
            var table = document.getElementById('employees');
            var id = 0;
            var tr1 = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td1.innerHTML = val.name;
            td2.innerHTML = val.hire_date;
            td3.innerHTML = val.salary;
            td4.innerHTML = '<td><button name="button" onclick="deleteEmployee()">delete</button></td>';
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.setAttribute('id', this.listOfEmployees.length - 1);
            table.appendChild(tr1);
        }
    };
    Employee.prototype.deleteEmployee = function () {
        if (this.listOfEmployees.length > 1) {
            this.listOfEmployees.splice(-1, 1);
        }
    };
    return Employee;
}(Person));
var employee = new Employee();
employee.displayEmployees();
var Costumer = /** @class */ (function (_super) {
    __extends(Costumer, _super);
    function Costumer() {
        var _this = _super.call(this) || this;
        _this.listOfCostumers = [];
        var btn = document.getElementById("add");
        btn.addEventListener("click", function (e) { return _this.addCostumer(); });
        return _this;
    }
    Object.defineProperty(Costumer.prototype, "getContract", {
        get: function () {
            return this.contract;
        },
        enumerable: true,
        configurable: true
    });
    Costumer.prototype.addCostumer = function () {
        var costumer = document.getElementById('costumer_name').value;
        var contract_number = document.getElementById('costumer_contract').value;
        if (costumer !== "" && contract_number !== "") {
            var table = document.getElementById('costumer');
            var tr1 = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.innerHTML = costumer;
            td2.innerHTML = contract_number;
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            table.appendChild(tr1);
        }
        else {
            console.log('Costumer field and Contract field are empty');
        }
    };
    return Costumer;
}(Person));
var costumer = new Costumer();
