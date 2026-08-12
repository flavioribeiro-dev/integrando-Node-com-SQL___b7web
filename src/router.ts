import { Router } from "express";
import { createUser } from "./services/user.js";

const router = Router();

router.post('/usuarios', async (req, res) => {
    // Validar os dados de entrada...

    const user = await createUser({ nome: 'Marcio', sobrenome: 'da Silva F', email: 'marcio@email.com' });
    if(user) {
        return res.status(201).json({ user });
    }
    return res.status(500).json({ error: 'email já cadastrado' });
})

router.get('/', (req, res) => {
    res.send('página inicial')
})

export default router;