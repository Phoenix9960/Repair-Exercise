const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

const isPending = async( req, res, next ) => {
  try {

    const { id } = req.params;

    const repair =await Repair.findOne({ where: { id } });

    if( !repair ) {
      return res.status(404).json({
        status: 'ERROR',
        msg: 'Repair not found given that id'
      });
    }

    
    if( repair.status !== 'pending' ){
      return res.status(404).json({
        status: 'ERROR',
        msg: 'Repair is not pending'
      });
    }

    // Add find repair to request object
    req.repair = repair;

    next();
  } catch (error) {

    console.log(error);
  }
}

const validUser = async( req, res, next ) => {
  try {

    const { userId } = req.body;
    
    const user =await User.findOne({ where: { id: userId } });

    if( !user ) {
      return res.status(404).json({
        status: 'ERROR',
        msg: 'User not found given that id'
      });
    }

    if( user.status !== 'available' ) {
      return res.status(404).json({
        status: 'ERROR',
        msg: 'User not available'
      });
    }
    
    next();
  } catch (error) {
    
    console.log(error);
  }
}

module.exports = { isPending, validUser };
