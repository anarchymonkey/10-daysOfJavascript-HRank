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

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    var arrows =  nums => (nums %2==0) ? nums*2 : nums*3; // provided the condition throw arrow
    var arr = nums.map(arrows); // map iterates over every element like map in python does
    return arr;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}
