import express from 'express';
import BookService from '../services/bookService';

const router = express.Router();
const bookService = new BookService();

router.get('/search', async (req, res) => {
    const { keyword, page = 1, pageSize = 10 } = req.query;
    try {
        const books = await bookService.searchBooks(keyword as string, parseInt(page as string), parseInt(pageSize as string));
        if (books.length === 0) {
            res.status(404).send("No books found");
            return;
        }
        res.status(200).json(books);
    } catch (error) {
        if (parseInt(page as string) < 1 || parseInt(pageSize as string) < 1) {
            res.status(400).send("Invalid page or pageSize");
        } else {
            res.status(500).send("Internal Server Error");
        }
    } finally {
        console.log(`Request completed with keyword=${keyword}, page=${page}, pageSize=${pageSize}`);
    }
});

export default router;