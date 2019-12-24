import express from 'express'
import notesService from '../services/NotesService'

export default class NotesController {
  constructor () {
    this.router = express
      .Router()
      .post('', this.createNote)
      .delete('/:id', this.deleteNoteById)
  }

  async deleteNoteById (req, res, next) {
    try {
      await notesService.deleteNoteById(req.params.id)
      return res.send('Successfully Deleted')
    } catch (error) {
      next(error)
    }
  }

  async createNote (req, res, next) {
    try {
      let data = await notesService.createNote(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
