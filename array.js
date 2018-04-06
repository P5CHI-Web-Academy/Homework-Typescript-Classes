function runMe() {
    function employees() {
        var printTable = "";
        var th = ['Employee', 'Hire date', 'Salary', 'Action'];
        printTable += "<tr>";
        for (var h = 0; h < th.length; h++) {
            printTable += "<th>" + th[h] + "</th>";
        }
        printTable += "</tr>";
        var action = '<a href="#" id="delete" onclick="deleteEmployee();">delete</a>';
        var em_data = [
            ['Jhon Doe', '10-02-2015', '1000', action],
            ['Mary Jane', '01-11-2013', '850', action],
            ['Michael Stuart', '27-11-2014', '1450', action],
            ['Micha Stut', '27-11-2018', '150', action]
        ];
        for (var i = 0; i < em_data.length; i++) {
            var em = em_data[i];
            printTable += "<tr>";
            for (var z = 0; z < em.length; z++) {
                printTable += "<td>" + em[z] + "</td>";
            }
            printTable += "</tr>";
        }
        return printTable;
    }
    document.getElementById('employees').innerHTML = employees();
    function customers() {
        var customers = [];
        var printTable = "";
        var th = ['Customer', 'Contract No', 'Action'];
        printTable += "<tr>";
        for (var h = 0; h < th.length; h++) {
            printTable += "<th>" + th[h] + "</th>";
        }
        printTable += "</tr>";
        return printTable;
    }
    function deleteEmployee() {
        alert("Deleted employee");
    }
    function addCustomer() {
    }
    document.getElementById('customers').innerHTML = customers();
}
