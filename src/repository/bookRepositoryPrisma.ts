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
        try {
            const books = await this.bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }

    public async searchBooksByTitle(req: Request, res: Response): Promise<void> {
        try {
            const title = req.query.title as string;
            const books = await this.bookService.searchBooksByTitle(title);
            res.json(books);
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(500).json({ error: errorMessage });
        }
    }
}

export default bookRepositoryPrisma;