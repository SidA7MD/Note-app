import express from "express";
import { GetAllNotes, AddANote, UpdateANote, DeleteANote, GetNoteById } from "../Controllers/NoteController.controller.js";

const router = express.Router();

router.get('/', GetAllNotes);
router.get('/:id', GetNoteById);
router.post('/', AddANote);
router.put('/:id' , UpdateANote);
router.delete('/:id' , DeleteANote);

export default router;