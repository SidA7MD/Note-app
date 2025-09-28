import express from "express";

const app = express();


app.get('/api/notes', (req,res) => {
    res.send("you got 5 minutes");
});

app.post('/api/notes', (req,res) => {
    res.status(201).json({message : "Note created"});
});

app.put('/api/notes/:id' , (req,res) => {
    res.status(200).json({message : "Note Updated"});
});

app.delete('/api/notes/:id' , (req,res) => {
    res.status(200).json({message : "Note deleted"});
});

app.listen(5001, () => {
    console.log('Server Running on Port 5001');
});