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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {

    for(var i = 0;i<nums.length;i++)
        {
            for(var j = i+1;j<nums.length;j++)
                {
                    if(nums[i]<nums[j])
                        {
                            var temp
                            temp = nums[j];
                            nums[j] = nums[i];
                            nums[i] = temp;
                        }
                }
        }

    for(var i = 0 ; i<nums.length ; i++)
        {
            if(nums[i] == nums[i+1])
                {
                    var freq = 1;
                    freq++;
                    var pos = i;
                }
        }


    if(nums[freq]==9)
        {
            return "10";
        }
    else if(freq>=2)
    {
            return nums[freq];
    }
    else
    {
        return nums[1];
    }


}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}
