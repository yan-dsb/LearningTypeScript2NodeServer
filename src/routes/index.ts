import { Router } from 'express';
import CreateUser from '../services/CreateUser';

const routes = Router();

routes.post('/users', (req, res) => {
    const { name, email, password, techs } = req.body;
    const userData = {
        name,
        email,
        password,
        techs,
    };
    const user = CreateUser(userData);
    return res.json(user);
});

export default routes;
