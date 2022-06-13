// const db = require("./database/db")
// db.connect()

// router.get("/", (req, res) => {
//     const sql = 'SELECT * FROM PERSONS'
//     client.query(sql, (err, results) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).json(results.rows)
//     })
// })

// router.get("/:id", (req, res) => {
//     const id = parseInt(req.params.id)
//     const sql = 'SELECT * FROM PERSONS WHERE id = $1'
//     client.query(sql, [id], (err, results) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         res.status(200).json(results.rows)
//     })
// })
