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

function getMaxLessThanK(n,k)
{
    var max = 0;
    var cur = -1;
    for (var i = 1; i < n; i++)
    {
        for (var j = i + 1; j <= n; j++)
        {
            cur = i & j;  // 5 & 2
            if (cur < k && cur > max)  // if the current value > max given and current > k
            {
                max = cur; // setting the max value after checking if the current > max
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}
