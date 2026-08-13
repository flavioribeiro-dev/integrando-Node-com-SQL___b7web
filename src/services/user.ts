import type { Prisma } from "../../generated/prisma/client.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/internal/prismaNamespace.js";
import prisma from "../libs/prisma.js";

export const createUser = async (data: Prisma.UserCreateInput) => {
    try {
        const user = await prisma.user.create({ data })
        return user;
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError) {
            if(error.code === 'P2002') {
                return ({ error: 'email já cadastrado' })
            }
        }
        return false;
    }
}

export const createUsers = async ( users: Prisma.UserCreateInput[] ) => {
    try {
        return await prisma.user.createMany({
            data: users,
            skipDuplicates: true
        })
    } catch (error) {
        return false;
    }
}

export const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            nome: true,
            email: true
        }
    });
    return result;
}
