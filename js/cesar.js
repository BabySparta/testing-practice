const cesarCipher = (string, offset = 0) => {
    const strArray = string.split('');
    let newString = [];
    strArray.forEach((letter) => {
        if (isLetter(letter)) {
        const lowerLetter = letter.toLowerCase();
        let newID = alphabetArray.indexOf(lowerLetter) + offset;
        while (newID > 25) {
            newID = newID - 26;
        }
        let newLetter = alphabetArray[newID];
        if (isUppercase(letter)) {newString.push(newLetter.toUpperCase())}
        else {newString.push(newLetter)}
        } else {
        newString.push(letter);
        }
    });
    return newString.join('');
}

const alphabet = 'abcdefhijklmnopqrstuvwxyz';
const alphabetArray = alphabet.split('');

const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
}

const isUppercase = (letter) => {
    return letter.toUpperCase() === letter;
}

export default cesarCipher;