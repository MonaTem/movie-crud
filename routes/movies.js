const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');

router.get('/', moviesController.index);
router.get('/:id', moviesController.show);
router.post('/', moviesController.create);

module.exports = router;
