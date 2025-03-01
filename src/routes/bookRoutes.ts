import express from 'express';
import BookService from '../services/bookService';

const router = express.Router();
const bookService = new BookService();

router.get('/search', async (req, res) => {
    const { keyword, page = 1, pageSize = 10 } = req.query;
    try {
        const books = await bookService.searchBooks(keyword as string, parseInt(page as string), parseInt(pageSize as string));
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;