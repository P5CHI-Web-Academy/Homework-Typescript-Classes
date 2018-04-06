function runMe() {

	class Employee{
		
		employees(){

			var printTable = "";

			const th = ['Employee', 'Hire date', 'Salary', 'Action'];
			printTable += "<tr>";
			for(var h = 0; h < th.length; h++){
				printTable += "<th>"+th[h]+"</th>";
			}
			printTable += "</tr>";

			
			
			 

			let action = '<a href="" id="delete">delete</a>';

		    var em_data = [
		    	['Jhon Doe','10-02-2015','1000', action],
		    	['Mary Jane','01-11-2013','850', action],
		    	['Michael Stuart','27-11-2014','1450', action],
		    	['Micha Stut','27-11-2018','150', action]
		    ];
		    
		    
	    	for(var i = 0; i < em_data.length; i++){
	    		var em = em_data[i];
	    		printTable += "<tr>";
	    		for(var z = 0; z < em.length; z++){
	    			printTable += "<td>"+em[z]+"</td>";
	    		}
	    		printTable += "</tr>";
	    	}
	    	
	    	return printTable; 

		    
		}

	}



	class Customer{

		customers(){

			let customers = [
				['sss', '523523']
			];

			let name = "Customer Name";
			let contract = "Contract number";



			var printTable = "";

			const th = ['Customer', 'Contract No', 'Action'];
			printTable += "<tr>";
			for(var h = 0; h < th.length; h++){
				printTable += "<th>"+th[h]+"</th>";
			}
			printTable += "</tr>";

			printTable += "<tr>";

				printTable += "<td>";
				printTable += "<input type='text' name='customer'>";
				printTable += "</td>";

				printTable += "<td>";
				printTable += "<input type='text' name='contract_no'>";
				printTable += "</td>";

				printTable += "<td>";
				printTable += "<a href=''>add</a>";
				printTable += "</td>";

			printTable += "</tr>";

			for(var j = 0; j < customers.length; j++){
	    		var cm = customers[j];
				printTable += "<tr>";
				for(var i = 0; i < cm.length; i++)
				{
					printTable += "<td>"+cm[i]+"</td>";
				}
				printTable += "</tr>";
			}

			return printTable;

		}

	}

	
	let employee = new Employee();
	document.getElementById('employees').innerHTML = employee.employees();

	let customer = new Customer();
	document.getElementById('customers').innerHTML = customer.customers();

}





