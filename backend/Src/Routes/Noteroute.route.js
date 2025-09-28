import express from "express";
import { GetAllNotes, AddANote, UpdateANote, DeleteANote } from "../Controllers/NoteController.controller.js";

const router = express.Router();

router.get('/', GetAllNotes);
router.post('/', AddANote);
router.put('/:id' , UpdateANote);
router.delete('/:id' , DeleteANote);

export default router;