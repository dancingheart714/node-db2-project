const router = require('express').Router();
const Cars = require('./cars-model');

const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware');

// [GET] '/api/cars'
router.get('/', (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
});
// [GET] '/api/cars/:id'
router.get('/:id', checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      next(err);
    });
});
// [POST] '/api/cars'
router.post(
  '/',
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    Cars.create(req.body)
      .then((car) => {
        res.status(201).json(car);
      })
      .catch(next);
  }
);

module.exports = router;
