import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BookService {
    async getAllBooks() {
        return await prisma.book.findMany({
            include: {
                author: true,
                borrowings: {
                    include: {
                        member: true
                    }
                }
            }
        });
    }

    async searchBooksByTitle(title: string) {
        return await prisma.book.findMany({
            where: {
                title: {
                    contains: title,
                    mode: 'insensitive'
                }
            },
            include: {
                author: true,
                borrowings: {
                    include: {
                        member: true
                    }
                }
            }
        });
    }

    async searchBooks(keyword: string, page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const books = await prisma.book.findMany({
            where: {
                OR: [
                    { title: { contains: keyword, mode: 'insensitive' } },
                    { category: { contains: keyword, mode: 'insensitive' } },
                    { author: {
                        OR: [
                            { firstName: { contains: keyword, mode: 'insensitive' } },
                            { lastName: { contains: keyword, mode: 'insensitive' } }
                        ]
                    }},
                    { borrowings: {
                        some: {
                            member: {
                                OR: [
                                    { firstName: { contains: keyword, mode: 'insensitive' } },
                                    { lastName: { contains: keyword, mode: 'insensitive' } }
                                ]
                            }
                        }
                    }}
                ]
            },
            skip,
            take,
            include: {
                author: true,
                borrowings: {
                    include: {
                        member: true
                    }
                }
            }
        });

        return books;
    }
}

export default BookService;