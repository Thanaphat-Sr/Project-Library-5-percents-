import { Request, Response } from 'express';
import AuthorService from '../services/authorService';

class authorRepositoryPrisma {
    deleteAuthor(arg0: number) {
        throw new Error('Method not implemented.');
    }
    updateAuthor(arg0: number, body: any) {
        throw new Error('Method not implemented.');
    }
    getAuthorById(arg0: number) {
        throw new Error('Method not implemented.');
    }
    private authorService: AuthorService;

    constructor() {
        this.authorService = new AuthorService();
    }

    public async getAllAuthors(req: Request, res: Response): Promise<void> {
        const authors = await this.authorService.getAllAuthors();
        res.json(authors);
    }

    public async createAuthor(req: Request, res: Response): Promise<void> {
        const author = await this.authorService.createAuthor(req.body);
        res.status(201).json(author);
    }
}

export default authorRepositoryPrisma;