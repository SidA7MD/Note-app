import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    res.send("you got 5 minutes");
});

router.post('/', (req,res) => {
    res.status(201).json({message : "Note created"});
});

router.put('/:id' , (req,res) => {
    res.status(200).json({message : "Note Updated"});
});

router.delete('/:id' , (req,res) => {
    res.status(200).json({message : "Note deleted"});
});

export default router;