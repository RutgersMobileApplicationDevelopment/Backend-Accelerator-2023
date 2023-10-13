let my_bools = [true,false,false]
if (my_bools[0] == true){
    console.log("Hello World!")
}
// output: Hello World!

// Lists[1]
let my_ints = [1,2,3,4,5]
my_ints.append(6)
// "appends" 6 to end of the list
// my_ints: [1, 2, 3, 4, 5, 6]

my_any = [15,true,"apple"]
console.log(my_any.includes("apple")) // true
my_any = my_any.splice(0,1)
// my_any: [15, true]
console.log(my_any.includes("apple")) // False
// deletes the item at index=0
// my_any: [true]
