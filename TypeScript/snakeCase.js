function convertToSnakeCase() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var inputText = input.value;
    output.textContent = snakeCase(inputText);
}
function snakeCase(input) {
    return input.replace(/([A-Z])/g, '_$1').toLowerCase();
}
