const express = require('express');

// controllers
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controllers');

// Middleware
const { usersExist } = require('../middlewares/users.middleware');

const router = express.Router();

router.route('/')
  .get( getAllUsers )
  .post( createUser )

router.route( '/:id' )
  .get( usersExist, getUserById )
  .patch( usersExist, updateUser )
  .delete( usersExist, deleteUser )

module.exports = { usersRouter: router };
