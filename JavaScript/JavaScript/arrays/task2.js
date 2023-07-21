/*Таск 2. Вариант 1*/
function array_var1() {
    const arr = [1, 2, 3, 4, 5];
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = first;
    return arr;
}
document.getElementById('task2_var1').innerHTML = array_var1();

/*Таск 2. Вариант 2*/
function array_var2(arr) {
    if (arr.length > 1) {
        const first = arr.shift();
        arr.push(first);
    }
    return arr;
}
document.getElementById('task2_var2').innerHTML = array_var2([5, 8, 11, 14, 21]);

/*Таск 2. Вариант 3*/
let array_var3 = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    return arr.slice(1).concat(arr[0]);
};
document.getElementById('task2_var3').innerHTML = array_var3([11, 12, 13, 6, 9]);