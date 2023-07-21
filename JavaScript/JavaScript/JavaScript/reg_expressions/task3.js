function anonymizeNumbers(num) {
    let pattern = /(\d{12})(\d{4})/;
    return num.replace(pattern, "**** **** **** $2");
}
function card() {
    let numbers = document.getElementById("card").value;
    if (numbers.length == 16) document.getElementById('reg_task3').innerHTML = `My credit card is ${anonymizeNumbers(numbers)}. Please keep it safe.`;
        else document.getElementById('reg_task3').innerHTML = "Invalid card number";
}