import { PrismaClient } from '@prisma/client';

class BookService {
    searchBooksByTitle(title: string) {
        throw new Error('Method not implemented.');
    }
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createBook(data: { title: string; isbn: string; category: string; authorId: number }) {
        return await this.prisma.book.create({
            data,
        });
    }

    async getAllBooks() {
        return await this.prisma.book.findMany({
            include: {
                author: true,
            },
        });
    }

    async getBookById(id: number) {
        return await this.prisma.book.findUnique({
            where: { id },
            include: {
                author: true,
            },
        });
    }

    async updateBook(id: number, data: { title?: string; isbn?: string; category?: string; authorId?: number }) {
        return await this.prisma.book.update({
            where: { id },
            data,
        });
    }

    async deleteBook(id: number) {
        return await this.prisma.book.delete({
            where: { id },
        });
    }

    async findBooksByTitle(title: string) {
        return await this.prisma.book.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
        });
    }

    async findBooksDueToday() {
        const today = new Date();
        return await this.prisma.borrowing.findMany({
            where: {
                dueDate: today,
                returnedAt: null,
            },
            include: {
                book: true,
                member: true,
            },
        });
    }

    async findBooksNotReturned() {
        return await this.prisma.borrowing.findMany({
            where: {
                returnedAt: null,
            },
            include: {
                book: true,
                member: true,
            },
        });
    }
}

export default BookService;