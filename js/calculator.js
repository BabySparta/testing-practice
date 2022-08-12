const add = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Please enter a number'
    return num1 + num2;
}
const subtract = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Please enter a number'
    return num1 - num2;
}
const multiply = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Please enter a number'
    return num1 * num2;
}
const divide = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Please enter a number'
    return num1 / num2;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide
}

export default calculator;