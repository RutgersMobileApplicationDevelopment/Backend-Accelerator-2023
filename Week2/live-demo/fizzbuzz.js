let n = 15;

// if i is divisible by 3 and 5, fizzbuzz
// if i / 3,fizz
// if i / 5, buzz
// else i

for ( let i = 1; i <= n; i++ ) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log("FizzBuzz");
    } else if ( i % 3 == 0) {
        console.log("Fizz");
    } else if ( i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}