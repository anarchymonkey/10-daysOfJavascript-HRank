'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0])
        {
            case 'a': letter = "A";
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                break;
            case 'b': letter = "B";
            case 'c':
            case 'd':
            case 'f':
            case 'g':
                break;
            case 'h': letter = "C";
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
                break;

            default: letter = "D";
        }

    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}
