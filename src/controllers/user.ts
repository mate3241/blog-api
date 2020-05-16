import { User } from '../models/user';
import { Request, Response } from 'express';
import { database } from '../lib/database';

export const index = async (req: Request, res: Response) => {
  try {
    const users: Array<User> = await database('user').select();
    res.json(users);
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error.data);
    res.sendStatus(500);
  }
}