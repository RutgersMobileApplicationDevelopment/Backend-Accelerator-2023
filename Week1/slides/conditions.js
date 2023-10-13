// Conditions[0]
username = "admin"
password = "password"

username2 = "rumad"
password2 = "rumad_password"

my_username = "ben"
my_password = "abcdefgh"
// Condition syntax
if (my_username == username && my_password == password){
    console.log("Logged into admin")
} else if (my_username == username && my_password == password2){
    console.log("Logged into rumad")
} else {
    console.log("Failed to log in")
}


// Conditions[1]
// You can write this...
if (my_username == username && my_password == password){
    logged_in = True
} else {
    logged_in = False
}

// or simply write this!
logged_in = (my_username == username && my_password == password)