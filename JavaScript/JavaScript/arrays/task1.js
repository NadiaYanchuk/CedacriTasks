/*Таск 1. Вариант 1*/
function average_var1() {
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    let avg;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    avg = sum / arr.length;
    return avg.toFixed(1);
}
document.getElementById('task1_var1').textContent = average_var1();

/*Таск 1. Вариант 2*/
function average_var2(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        result += arr[i];
    result /= arr.length;
    return result.toFixed(1);
}
document.getElementById('task1_var2').textContent = average_var2([5, 8, 11, 14, 21]);

/*Таск 1. Вариант 3*/
let average_var3 = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++)
        result += arr[i];
    return (result / arr.length).toFixed(1);
};
document.getElementById('task1_var3').textContent = average_var3([11, 12, 13, 6, 9]);