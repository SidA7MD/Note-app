import Note from "../Models/Note.model.js";

export const GetAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in Getting Notes", error);
    res.status(500).json({ message: "Enternal Server Error" });
  }
};

export const GetNoteById = async (req,res) => {
try{
    const FoundedNote = await Note.findById(req.params.id);
    if(!FoundedNote)return res.status(404).json({message : "Note Not Found"});
    res.status(200).json(FoundedNote)
}catch(error){
    console.error("Error in Getting Notes", error);
    res.status(500).json({ message: "Enternal Server Error" });
}
};

export const AddANote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (error) {
    console.error("Error in Adding Note", error);
    res.status(500).json({ message: "Enternal Server Error" });
  }
};
export const UpdateANote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const UpdatedANote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!UpdatedANote)
      return res.status(404).json({ message: "note not found" });

    res.status(200).json(UpdatedANote);
  } catch (error) {
    console.error("Error in Updating Note", error);
    res.status(500).json({ message: "Enternal Server Error" });
  }
};
export const DeleteANote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const DeleteDNote = await Note.findByIdAndDelete(req.params.id, {
      title,
      content,
    });
    if (!DeleteDNote)
      return res.status(404).json({ message: "note not found" });

    res.status(200).json({ message: "note Deleted Succesfully" });
  } catch (error) {
    console.error("Error in Updating Note", error);
    res.status(500).json({ message: "Enternal Server Error" });
  }
};
