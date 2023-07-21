function formatEmployees(employees) {
    return employees.map(employee => ` Name: ${employee.name}, age: ${employee.age} years`);
}
const employers = [
    { name: "John", age: 23 },
    { name: "Jane", age: 33 },
    { name: "Alex", age: 45 }
];
document.getElementById('task3').textContent = formatEmployees(employers);