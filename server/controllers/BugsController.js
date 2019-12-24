import express from 'express'
import bugsService from '../services/BugsService'

export default class BugsController {
  constructor () {
    this.router = express
      .Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      // .get('/:id/notes', this.getNotesByBug)
      .post('', this.createBug)
      .put('/:id', this.editBugById)
      .delete('/:id', this.closeBug)
  }

  async getAll (req, res, next) {
    try {
      let data = await bugsService.getAll()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createBug (req, res, next) {
    try {
      let data = await bugsService.createBug(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById (req, res, next) {
    try {
      let data = await bugsService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editBugById (req, res, next) {
    try {
      let data = await bugsService.editBugById(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async closeBug (req, res, next) {
    try {
      await bugsService.closeBug(req.params.id)
      return res.send('Bug Successfully Closed')
    } catch (error) {
      next(error)
    }
  }
}
