import { Router } from "express";
import { createUser } from "./services/user.js";

const router = Router();

router.post('/usuarios', async (req, res) => {
    const user = createUser({ 
        nome: 'Charlotte', 
        sobrenome: 'Ribeirinha'
    });
    return user;
})

router.get('/', (req, res) => {
    res.send('página inicial')
})

export default router;