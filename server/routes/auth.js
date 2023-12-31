import express from "express"

const router = express.Router()

router.post("/register", (req, res) => {
    res.json({
        data: "You hit register endpoint yay!"
    })
})

export default router