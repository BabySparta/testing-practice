import capitalize from './capitalize';
import reverseString from './reverse';
import calculator from './calculator';
import cesarCipher from './cesar';
import analyze from './analyze';


// Capitalize
it('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

it('capitalizeEmpty', () => {
    expect(capitalize('')).toBe('');
});

it('notString', () => {
    expect(capitalize(3)).toBe('Please enter a string');
});

it('specialChar', () => {
    expect(capitalize('hello!')).toBe('Hello!');
});

// Reverse String
it('reverseBasic', () => {
    expect(reverseString('hello')).toBe('olleh')
});

it('reverseSpecial', () => {
    expect(reverseString('hello!')).toBe('!olleh')
});

// Calculator
it('calcBasic', () => {
    expect(calculator.add(2, 4)).toBe(6);
    expect(calculator.subtract(8, 1)).toBe(7);
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.divide(8, 4)).toBe(2);
});

it('notNumbers', () => {
    expect(calculator.add('2', 4)).toBe('Please enter a number');
    expect(calculator.subtract('8', 1)).toBe('Please enter a number');
    expect(calculator.multiply('2', 4)).toBe('Please enter a number');
    expect(calculator.divide('8', 4)).toBe('Please enter a number');
});

// Cesar Cipher
it('basicCesar', () => {
    expect(cesarCipher('hello', 1)).toBe('ifmmp');
})

it('testUpperCesar', () => {
    expect(cesarCipher('HelLo', 1)).toBe('IfmMp');
})

it('specialCesar', () => {
    expect(cesarCipher('HelLo!', 1)).toBe('IfmMp!');
    expect(cesarCipher('hello.js', 1)).toBe('ifmmp.kt');
})

it('spaceCesar', () => {
    expect(cesarCipher('HelLo hello', 1)).toBe('IfmMp ifmmp');
})

// Analyze array
it('basicAnalyze', () => {
    expect(analyze([1,2,3,4])).toStrictEqual({
        min: 1,
        max: 4,
        average: 3,
        length: 4
    })
})

it('notArrayAnalyze', () => {
    expect(analyze(2)).toBe('Please input an array')
})

it('notNumsAnalyze', () => {
    expect(analyze([2,1,'3'])).toBe('Please input an array with only numbers');
})