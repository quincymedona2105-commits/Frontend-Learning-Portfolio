
let employeeForm = document.getElementById("employeeForm");
let employeeTable = document.getElementById("employeeTable");

employeeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("employeeName").value;
    let age = Number(document.getElementById("employeeAge").value);
    let department = document.getElementById("employeeDepartment").value;
    let salary = Number(document.getElementById("employeeSalary").value);

    let employee = {id: Date.now(), name: name, age: age, department: department, salary: salary};

    localStorage.setItem("employee", JSON.stringify(employee));

    alert("Employee saved successfully!");

    employeeForm.reset();

    displayEmployee();
});

let displayEmployee = () => {
    let employee = JSON.parse(localStorage.getItem("employee"));

    employeeTable.innerHTML =
    `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
    </tr>`;

};

displayEmployee();
