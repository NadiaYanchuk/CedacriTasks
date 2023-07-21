type SnakeCase<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${First extends Uppercase<First> ? '_' : ''}${Lowercase<First>}${SnakeCase<Rest>}`
    : T;

function convertToSnakeCase() {
    const input = document.getElementById('input') as HTMLInputElement;
    const output = document.getElementById('output');
    const inputText = input.value;
    output.textContent = snakeCase(inputText);
}

function snakeCase<T extends string>(input: T): SnakeCase<T> {
    return input.replace(/([A-Z])/g, '_$1').toLowerCase() as SnakeCase<T>;
}