const express = require("express")
const router = express.Router()
const client = require("../database/db")

router.get("/", async (req, res) => {
    const sql = 'SELECT * FROM persons'
    try {
        const result = await client.query(sql)
        console.log(result)
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM persons WHERE id = $1'
    const values = [id]
    try {
        const result = await client.query(sql, values)
        console.log(result)
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
    }
})

router.post("/", async (req, res) => {
    const {name, address} = req.body
    console.log(name, address)
    const sql = 'INSERT INTO persons (name, address) VALUES($1, $2) RETURNING *'
    const values = [name, address]
    try {
        const result = await client.query(sql, values)
        console.log(result.rows)
        res.status(201).send(`person added with ID: ${result.rows[0].id}`)
    } catch (err) {
        console.error(err)
    }
})

router.put("/:id", async (req, res) => {
    const {name, address} = req.body
    const {id} = req.params
    const sql = 'UPDATE persons SET name = $1, address = $2 WHERE id = $3 RETURNING *'
    const values = [name, address, id]
    try {
        const result = await client.query(sql, values)
        console.log(result.rows)
        res.send(`person with id ${result.rows[0].id} updated`)
    } catch (err) {
        console.error(err)
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM persons WHERE id = $1 RETURNING *"
    const values = [id]
    try {
        const result = await client.query(sql, values)
        console.log(result.rows)
        res.status(200).send(`person with id ${result.rows[0].id} deleted`)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router
