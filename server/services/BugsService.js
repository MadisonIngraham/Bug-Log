import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }

  async createBug(rawData) {
    return await _repository.create(rawData);
  }

  async getById(id) {
    return await _repository.findById(id);
  }

  async editBugById(id, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: false },
      update
    );
    return data;
  }

  async closeBug(id) {
    let data = await _repository.findOneAndUpdate(
      { _id: id },
      { closed: true }
    );
  }
}

const bugsService = new BugsService();
export default bugsService;
