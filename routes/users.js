const express = require("express")
const router = express.Router()
const pool = require("../database/db2")

router.get("/", async (req, res) => {
    const sql = 'SELECT * FROM users'
    try {
        const result = await pool.query(sql)
        console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM users WHERE id = $1'
    const values = [id]
    try {
        const result = await pool.query(sql, values)
        console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
    }
})

router.post("/", async (req, res) => {
    const {name, email} = req.body
    console.log(name, email)
    const sql = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *'
    const values = [name, email]
    try {
        const result = await pool.query(sql, values)
        console.log(result.rows)
        res.status(201).json(`person added with ID: ${result.rows[0].id}`)
    } catch (err) {
        console.error(err)
    }
})

router.put("/:id", async (req, res) => {
    const {name, email} = req.body
    const id = req.params.id
    const sql = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *'
    const values = [name, email, id]
    try {
        const result = await pool.query(sql, values)
        console.log(result.rows)
        res.status(200).send(`user with id ${result.rows[0].id} updated`)
    } catch (err) {
        console.error(err)
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM users WHERE id = $1 RETURNING *'
    const values = [id]
    try {
        const result = await pool.query(sql, values)
        console.log(result.rows)
        res.status(200).send(`user with id ${result.rows[0].id} deleted`)

    } catch (err) {
        console.error(err)
    }
})

module.exports = router
