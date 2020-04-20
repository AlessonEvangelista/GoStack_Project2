import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alesson Ve',
    email: 'ealesson@gmail.com',
    password_hash: '@Ahus15534_-',
  });

  return res.json({ user });
});

export default routes;
