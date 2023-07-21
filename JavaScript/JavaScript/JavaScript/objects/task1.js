function calculateSum() {
    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
    let sum = 0;
    for (let person in salaries) {
        sum += salaries[person];
    }
    document.getElementById('object_task1').innerHTML = 'Sum of salaries: ' + sum;
}