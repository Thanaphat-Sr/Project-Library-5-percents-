import { Router } from 'express';
import bookRepositoryPrisma from '../repository/bookRepositoryPrisma';

const router = Router();
const bookController = new bookRepositoryPrisma();

router.post('/', async (req, res) => {
    const book = await bookController.createBook(req.body);
    res.json(book);
});

router.get('/', async (req, res) => {
    await bookController.getAllBooks(req, res);
});

router.get('/search', async (req, res) => {
    const { title } = req.query;
    const books = await bookController.searchBooksByTitle(req, res);
    res.json(books);
});

export default router;