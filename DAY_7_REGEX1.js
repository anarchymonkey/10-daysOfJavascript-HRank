
function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }

    function regexVar() {
        /*
         * Declare a RegExp object variable named 're'
         * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
         */
        let expressions = /^(a|e|i|o|u).*\1$/; // .* checks the whole string \1 checks the first and last character  and ^(a|e|i|o|u) checks for vowels

        /*
         * Do not remove the return statement
         */
        return expressions;
    }


function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}
