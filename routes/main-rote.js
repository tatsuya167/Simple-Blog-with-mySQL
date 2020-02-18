const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.get('/', controller.getTopPage)

router.get('/read', controller.readNote)

router.get('/create', controller.createNote)

router.post('/write', controller.postNote)

router.get('/notes/:noteId', controller.detailNote)

router.post('/update', controller.updateNote)

router.post('/delete', controller.deleteNote)

module.exports = router;