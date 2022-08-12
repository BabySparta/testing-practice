const capitalize = (string) => {
    if (typeof string !== 'string') return 'Please enter a string';
    const restOfString = string.slice(1);
    const firstChar = string.charAt(0).toUpperCase();
    return firstChar + restOfString;
}

export default capitalize;