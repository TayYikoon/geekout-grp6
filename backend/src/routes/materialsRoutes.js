//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const express = require('express');

const controller = require('../controllers/materialsController');

const multer = require('multer')

const upload = multer();

//////////////////////////////////////////////////////
// CREATE ROUTER
//////////////////////////////////////////////////////
const router = express.Router();

//////////////////////////////////////////////////////
// DEFINE ROUTES
//////////////////////////////////////////////////////

router.post('/', upload.single('pdf'), controller.createMaterial);

//////////////////////////////////////////////////////
// EXPORT ROUTER
//////////////////////////////////////////////////////
module.exports = router;