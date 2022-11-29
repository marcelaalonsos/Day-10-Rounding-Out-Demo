const router = require('express').Router();
const { Student, House } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const houses = await House.getEverything();
    res.send(houses);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const house = await House.findByPk(req.params.id);
    if (house === null) {
      throw new Error("That's not a house!");
    } else {
      res.send(house);
    }
  } catch(e) {
    next(e);
  }
});

module.exports = router;
