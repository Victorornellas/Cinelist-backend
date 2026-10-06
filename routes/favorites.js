const express = require("express")
const router = express.Router()      
const Favorite = require("../models/Favorite")   

router.get("/", async (req, res) => {
    const favorites = await Favorite.find()
    res.json(favorites)
 })
router.post("/", async (req, res) => { 
    const favorite = await Favorite.create(req.body)
    res.status(201).json(favorite)
 })
router.delete("/:id", async (req, res) => { 
    const favorite = await Favorite.findByIdAndDelete(req.params.id)
    res.status(204).send()
 })

module.exports = router