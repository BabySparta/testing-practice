const analyze = (arr) => {
    if(Array.isArray(arr) === false) return 'Please input an array';
    let checkArr = true;
    arr.forEach(element => {
        if (typeof element !== 'number') checkArr = false;
    });
    if (checkArr === false) return 'Please input an array with only numbers';
    object.length = arr.length;
    object.min = Math.min(...arr);
    object.max = Math.max(...arr);
    object.average = getAverage(arr);
    return object;
}

let object = {
    min: '',
    max: '',
    average: '',
    length: ''
}

const getAverage = (arr) => {
    const total = arr.reduce((num1, num2) => num1 + num2, 0);
    return Math.round(total / arr.length);
}

export default analyze;