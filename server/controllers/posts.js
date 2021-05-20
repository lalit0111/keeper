import PostNote from "../models/postNotes.js";

export const getNotes = async (req, res) => {
  try {
    const postNote = await PostNote.find();
    res.status(200).json(postNote);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const newNote = new PostNote({
      key: req.body.key,
      title: req.body.title,
      content: req.body.content
    });
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
};

export const deleteNote = async (req, res) => {
  try {
    let key = req.params.key;
    await PostNote.findOneAndDelete({
      key: key
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.error(error);
  }
};
