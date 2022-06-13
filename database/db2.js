const Pool = require("pg").Pool

const pool = new Pool({
    host: "127.0.0.1",
    port: 5432,
    user: "admin",
    password: "admin",
    database: "pgdb"
})

pool.on("connect", () => {
    console.log("pool connection to db established")
})

pool.on("error", (err, client) => {
    console.error('Unexpected error on idle client', err)
})

pool.on("end", () => {
    console.log("pool connection to db ended")
})

module.exports = pool
