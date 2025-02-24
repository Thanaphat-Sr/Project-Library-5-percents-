import { PrismaClient } from '@prisma/client';

class AuthorService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createAuthor(data: { firstName: string; lastName: string; affiliation: string }) {
        return await this.prisma.author.create({
            data,
        });
    }

    async getAllAuthors() {
        return await this.prisma.author.findMany();
    }

    async getAuthorById(id: number) {
        return await this.prisma.author.findUnique({
            where: { id },
        });
    }

    async updateAuthor(id: number, data: { firstName?: string; lastName?: string; affiliation?: string }) {
        return await this.prisma.author.update({
            where: { id },
            data,
        });
    }

    async deleteAuthor(id: number) {
        return await this.prisma.author.delete({
            where: { id },
        });
    }
}

export default AuthorService;