export const GetAllNotes = (req,res) => {
    res.send("you got 5 minutes");
}

export const AddANote = (req,res) => {
    res.status(201).json({message : "Note created"});
}
export const UpdateANote = (req,res) => {
    res.status(200).json({message : "Note Updated"});
}
export const DeleteANote = (req,res) => {
    res.status(200).json({message : "Note deleted"});
}