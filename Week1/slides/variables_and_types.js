// This is a comment

variable1 = "Hello World"   // A string type
print(variable1)

variable2 = 1               // A number type
print(variable2)

variable3 = true            // A boolean type
print(variable3)

// Let’s change a boolean type to a string type!
variable3 = variable3.toStr()
print(variable3)

variable4 = {}      // This is an **object**.
// It can be used similarly to a HashMap or dictionary
variable4['a'] = 1
variable4['b'] = "A"
// Object { a: 1, b: A}

// We can also instantiate it like this.
variable4 = {'a': 1, 'b': "A"}
variable5 = [5,1,3,4]   // This is also an **object**.
// We can use it just like a list.
variable5[0] = 2        // Array(4) [ 2, 1, 3, 4 ]