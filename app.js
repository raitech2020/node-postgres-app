const express = require("express")
const persons = require("./routes/persons")
const users = require("./routes/users")

const PORT = 3000

const app = express()

// set built-in middleware for getting html form req.body
app.use(express.urlencoded({
    extended: true
}))
// set built-in middleware for getting json req.body
app.use(express.json())

// set users Router
app.use("/users", users)
// set persons Router
app.use("/persons", persons)

app.listen(PORT, () => {
    console.log(`Express Server started on port ${PORT}`)
})



