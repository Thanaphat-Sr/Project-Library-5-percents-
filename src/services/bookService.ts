import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BookService {
    async searchBooks(keyword: string, page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const books = await prisma.book.findMany({
            where: {
                OR: [
                    { title: { contains: keyword} },
                    { category: { contains: keyword} },
                    { author: {
                        OR: [
                            { firstName: { contains: keyword} },
                            { lastName: { contains: keyword} }
                        ]
                    }},
                    { borrowings: {
                        some: {
                            member: {
                                OR: [
                                    { firstName: { contains: keyword} },
                                    { lastName: { contains: keyword} }
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