var random_variable = 123; // This can be updated and 

// Both statements are allowed
random_variable = 0;        
var random_variable = 246;

const answer_to_the_universe = 42;  // This constant can not be redeclared or updated!

// Both statements will fail!
answer_to_the_universe = -1;
const answer_to_the_universe = 2;

let declared_by_let = 15;

declared_by_let = 16;       // This is allowed
let declared_by_let = 0;    // Redeclaration is not allowed