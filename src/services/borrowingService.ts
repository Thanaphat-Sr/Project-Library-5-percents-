import { PrismaClient } from '@prisma/client';

class BorrowingService {
    getUnreturnedBooks() {
        throw new Error('Method not implemented.');
    }
    getBorrowingHistoriesByDueDate(arg0: Date) {
        throw new Error('Method not implemented.');
    }
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createBorrowing(data: { memberId: number; bookId: number; borrowedAt: Date; dueDate: Date; returnedAt?: Date; }, numberOfBooks: any, p0: Date, p1: Date | undefined) {
        return await this.prisma.borrowing.create({
            data,
        });
    }

    async getAllBorrowings() {
        return await this.prisma.borrowing.findMany({
            include: {
                book: true,
                member: true,
            },
        });
    }

    async getBorrowingById(id: number) {
        return await this.prisma.borrowing.findUnique({
            where: { id },
            include: {
                book: true,
                member: true,
            },
        });
    }

    async updateBorrowing(id: number, data: { memberId?: number; bookId?: number; borrowedAt?: Date; dueDate?: Date; returnedAt?: Date }) {
        return await this.prisma.borrowing.update({
            where: { id },
            data,
        });
    }

    async deleteBorrowing(id: number) {
        return await this.prisma.borrowing.delete({
            where: { id },
        });
    }
}

export default BorrowingService;