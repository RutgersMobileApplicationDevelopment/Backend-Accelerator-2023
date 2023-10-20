// basic operators (e.g. add, subtract)
// nested functions
// when to use arrow functions vs. normal functions
// returning multiple values

function add( x, y ) {
    return x + y
}

// console.log(add(1, 2));

let add1 = (x, y) => x + y;

let add2 = (x, y) => {
    return x + y;
}

// console.log(add2(1,2))

// function subtract( x, y ) {
//     return y - x
// }

function factorial( x ) {
    if (x == 1) return x;
    return factorial( x - 1 ) * x;
}

function example_nested( a ) {
    let b = a * 2;

    let nested_func = function( x ) {
        return x * 2;
    }

    let c = nested_func(b);

    return c;
}

// console.log(example_nested(2));

function return_multiple_values_mult2( x, y, z ) {
    return [x * 2, y * 2, z * 2]
}

let res = return_multiple_values_mult2( 1, 2, 3 );

console.log(res);