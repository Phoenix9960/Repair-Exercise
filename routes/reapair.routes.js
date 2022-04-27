const express  = require('express');

// Controllers
const {
  getAllPendients,
  getRepairById,
  makeDate,
  completeRepair,
  cancelRepair
} = require('../controllers/repair.controllers');

// Middlewares
const { isPending, validUser } = require('../middlewares/repair.middleware');

const router = express.Router();

router.route('/')
  .get( getAllPendients )
  .post( validUser, makeDate )

router.route( '/:id' )
.get( isPending, getRepairById )
.patch( isPending, completeRepair )
.delete( isPending, cancelRepair )

module.exports = { repairsRouter: router };

