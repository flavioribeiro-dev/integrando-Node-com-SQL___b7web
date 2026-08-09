import { Router } from "express";
import prisma from "./libs/prisma.js";

const router = Router();

router.post('/usuarios', (req, res) => {
    const user = prisma.user.create({
        data: {
            nome: "Henrique",
            sobrenome: "Ribeiro",
        }
    })
    return res.json({ user })
})

router.get('/usuarios', (req, res) => {
    const users = prisma.user.findMany();
    res.json({ users });
})

router.get('/', (req, res) => {
    res.send('página inicial')
})

export default router;