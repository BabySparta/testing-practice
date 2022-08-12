import capitalize from './capitalize';
import reverseString from './reverse';
import calculator from './calculator';
import cesarCipher from './cesar';



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