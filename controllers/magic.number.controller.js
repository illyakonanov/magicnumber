import { Router } from 'express';
import { makeMagicNumber } from '../services/magic.number.service';
import getValidator from '../validations/get.magic.number.validator';

const getMagicNumber = (req, res) => {
  const { x, y } = req.query;
  const magicNumber = makeMagicNumber(x, y);
  res.send(`Magic number is ${magicNumber}`);
};

export default () => {
  const router = Router();
  router.get('/', getValidator, getMagicNumber);
  return router;
}