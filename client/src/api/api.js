import axios from "axios";

const url = "http://localhost:27017/posts";

export const fetchNotes = () => axios.get(url);

export const postNote = (note) => axios.post(url, note);

export const deleteNote = (key) => axios.delete(url + "/" + key);
