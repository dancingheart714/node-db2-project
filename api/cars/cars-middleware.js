const Cars = require('./cars-model');
const db = require('../../data/db-config');
var vinValidator = require('vin-validator');

exports.checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    if (car) {
      req.car = car;
      next();
    } else {
      res.status(404).json({
        message: `car with id ${req.body.id} is not found`,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.checkCarPayload = (req, res, next) => {
  if (!req.body.vin || !req.body.make || !req.body.model || !body.mileage) {
    return res.status(400).json({
      message: 'required field is missing',
    });
  }
  next();
};

exports.checkVinNumberValid = (req, res, next) => {
  var isValidVin = vinValidator.validate(req.body.vin);
  if (!isValidVin) {
    return res.status(400).json({
      message: `vin ${req.body.vin} is invalid`,
    });
  }
  next();
};

exports.checkVinNumberUnique = (req, res, next) => {
  const vin = req.body;
  const isValidVin = vinValidator.validate(vin);
  Cars.getVinNumber(vin).then((car) => {
    if (!car) {
      res.status(400).json({
        message: `vin ${req.body.vin} already exists`,
      });
    } else {
      next();
    }
  });
};
