const { User } = require('../models/user.model');

const usersExist = async( req, res, next ) => {
  try {
    
    const { id } = req.params;

    const user =await User.findOne({ where: { id } });

    if( !user ) {
      return res.status(404).json({
        status: 'ERROR',
        msg: 'User not found given that id'
      });
    }

    // Add find user to request object
    req.user = user;

    next();
  } catch (error) {
    
    console.log(error)
  }
}

module.exports = { usersExist };
