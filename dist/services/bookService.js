"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class BookService {
    searchBooks(keyword, page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * pageSize;
            const take = pageSize;
            const books = yield prisma.book.findMany({
                where: {
                    OR: [
                        { title: { contains: keyword } },
                        { category: { contains: keyword } },
                        { author: {
                                OR: [
                                    { firstName: { contains: keyword } },
                                    { lastName: { contains: keyword } }
                                ]
                            } },
                        { borrowings: {
                                some: {
                                    member: {
                                        OR: [
                                            { firstName: { contains: keyword } },
                                            { lastName: { contains: keyword } }
                                        ]
                                    }
                                }
                            } }
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
        });
    }
}
exports.default = BookService;
