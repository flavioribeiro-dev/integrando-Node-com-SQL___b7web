import { Router } from "express";
import { createUser, createUsers } from "./services/user.js";
import { count } from "node:console";

const router = Router();

router.post('/user', async (req, res) => {
    // Validar os dados de entrada...

    const user = await createUser({ nome: 'Marcio', sobrenome: 'da Silva F', email: 'marcio@email.com' });
    if(user) {
        return res.status(201).json({ user });
    }
    return res.status(500).json({ error: 'email já cadastrado' });
})

router.post('/users', async (req, res) => {
    const result = await createUsers([
        { nome: 'Marilene', sobrenome: 'Silva', email: 'lene@yahoo.com' },
        { nome: 'Rafaela', sobrenome: 'Silva', email: 'amoreca@yahoo.com' },
        { nome: 'Coringa', sobrenome: 'Gomes', email: 'coring@yahoo.com' },
    ]);
    res.json({ result });
})


router.get('/', (req, res) => {
    res.send('página inicial')
})

export default router;