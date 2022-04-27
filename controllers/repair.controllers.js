const { Repair } = require('../models/repair.model');

const getAllPendients = async( req, res ) => {
  try {
    
    const pendients =await Repair.findAll({ where: {status: 'pending'} });
  
    res.status(200).json({
      pendients
    });
  } catch (error) {
    
    console.log(error);
  }

}

const getRepairById = async( req, res ) => {
  try {

    const { repair } = req;

    res.status(200).json({
      repair
    });
  } catch (error) {
    
    console.log(error);
  }
}

const makeDate = async( req, res ) => {
  try {

    const { date, userId } = req.body;

    const repair =await Repair.create({ date, userId })

    res.status(201).json({
      repair
    })
  } catch (error) {
    
    console.log(error);
  }
}

const completeRepair = async( req, res ) => {
  try {

    const { repair } = req;

    await repair.update({ status: 'completed' })

    res.json({
      status: 'succes'
    });
  } catch (error) {

    console.log(error);
  }
}

const cancelRepair = async( req, res ) => {
  try {

    const { repair } = req;

    await repair.update({ status: 'cancelled' })

    res.json({
      status: 'succes'
    });
  } catch (error) {
    
    console.log(error);
  }
}

module.exports = {
  getAllPendients,
  getRepairById,
  makeDate,
  completeRepair,
  cancelRepair,
};
