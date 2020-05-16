import { router as userRouter } from './user';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });

router.use('/user', userRouter);