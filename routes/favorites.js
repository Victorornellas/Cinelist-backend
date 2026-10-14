const express = require("express")
const router = express.Router()      
const Favorite = require("../models/Favorite")   

router.get("/", async (req, res) => {
    try {
    const favorites = await Favorite.find()
    res.json(favorites)
 } catch (err) {
    res.status(500).json({ message: err.message })
 }
})
router.post("/", async (req, res) => { 
    try {
        const favorite = await Favorite.create(req.body)
        res.status(201).json(favorite)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
 })
router.delete("/:id", async (req, res) => { 
    const favorite = await Favorite.findByIdAndDelete(req.params.id)
    res.status(204).send()
 })

module.exports = router