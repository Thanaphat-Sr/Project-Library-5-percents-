import { Request, Response } from 'express';
import BookService from '../services/bookService';

class bookRepositoryPrisma {
    createBook(body: any) {
        throw new Error('Method not implemented.');
    }
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    public async getAllBooks(req: Request, res: Response): Promise<void> {
        const books = await this.bookService.getAllBooks();
        res.json(books);
    }

    public async searchBooksByTitle(req: Request, res: Response): Promise<void> {
        const title = req.query.title as string;
        const books = await this.bookService.searchBooksByTitle(title);
        res.json(books);
    }
}

export default bookRepositoryPrisma;