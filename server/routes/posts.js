import express from "express";
import { getNotes, createNote, deleteNote } from "../controllers/posts.js";
import bodyParser from "body-parser";

const router = express.Router();

router.get("/", bodyParser.json(), getNotes);
router.post("/", bodyParser.json(), createNote);
router.delete("/:key", bodyParser.json(), deleteNote);

export default router;
