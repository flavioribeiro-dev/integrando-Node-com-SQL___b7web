import prisma from "../libs/prisma.js"

// export const createUser = async (nome: string, sobrenome: string) => {

//     const user = await prisma.user.create({
//         data: { nome, sobrenome }
//     })
//     return user;

// }

type createUserProps = {
    nome: string,
    sobrenome: string
}
export const createUser = async ( { nome, sobrenome }: createUserProps ) => {
    const user = await prisma.user.create({
        data: { nome, sobrenome }
    })
}