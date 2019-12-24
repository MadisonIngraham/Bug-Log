import express from 'express'
import bugsService from '../services/BugsService'

export default class BugsController {
  constructor () {
    this.router = express
      .Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByBug)
      .post('', this.createBug)
      .put('/:id', this.editBugById)
      .delete('/:id', this.deleteBug)
  }

  async getAll (req, res, next) {
    try {
      let data = await bugsService.getAll()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
