const express = require('express')
const router = express.Router()
const shorteningController = require('../controller/shorteningController')

router.route('/')
    .get(shorteningController.getAllUrl)

module.exports = router