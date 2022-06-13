const {Client} = require("pg")

const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: "admin",
    password: "admin",
    database: "pgdb"
})

client.connect()

client.on("connect", () => {
    console.log("client connection to db established")
})

client.on("end", () => {
    console.log("client connection to db ended")
})

module.exports = client
