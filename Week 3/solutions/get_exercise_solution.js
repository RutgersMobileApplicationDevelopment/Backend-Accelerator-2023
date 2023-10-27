const express = require('express')
const app = express()
const port = 3000

const my_dict = {
    "apple": "pie",
    "orange": "juice",
    "banana": "split",
}

const my_list = ["apple","orange","banana"]

// Write a GET method that takes a param as an input.
// If the URL is localhost:3000/api/dict?key=apple
// then the client will receive "pie". Similarly, if
// the param is "orange", the client will receive "juice".
//
// This GET method should return a string from my_dict
// that has the index passed as a param.
app.get("/api/dict", (req, res) => {
    let result = ""

    if (req.query.key in my_dict) {
        result = my_dict[req.query.key]
    } else {
        result = "COULD NOT FIND KEY IN my_dict"
    }

    res.send(result)
})

// Write a GET method that takes a query as an input.
// If the URL is localhost:3000/api/list/0 then the 
// client will receive "apple". If the url is .../api/list/1,
// the client will receive "orange".
//
// This GET method should return a string from my_list
// with the matching index passed as a query string.
app.get("/api/list/:index", (req, res) => {
    let result = ""

    if (req.params.index >= 0 && req.params.index < my_list.length) {
        result = my_list[req.params.index]
    } else {
        result = `INVALID INDEX: ${req.params.index}`
    }
 
    res.send(result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})