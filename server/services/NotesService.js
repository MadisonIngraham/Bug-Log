import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async createNote(rawData) {
    return await _repository.create(rawData);
  }

  async deleteNoteById(id) {
    let data = await _repository.findByIdAndDelete({ _id: id });
  }

  async getNotesByBug(bug) {
    return await _repository.find({ bug: bug });
  }

  async getAll() {
    return await _repository.find({});
  }
}

const notesService = new NotesService();
export default notesService;
