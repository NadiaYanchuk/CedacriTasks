function isValid(phone) {
    let pattern = /^(\+4|3)(\s?\(\d{3}\)\s?|\s?)(\d{3}[-\s]?\d{2}[-\s]?\d{2})$/;
    return pattern.test(phone);
}
function phone() {
    let phone = document.getElementById("phone").value;
    document.getElementById('reg_task2').innerHTML = (isValid(phone) ? "True" : "False");
}