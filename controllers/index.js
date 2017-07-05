import { Router } from 'express';
import getMagicNumberController from './magic.number.controller';

export const getPublicRoutes = () => {
  const router = Router();
  router.use('/magicnumber', getMagicNumberController());
  return router;
}
