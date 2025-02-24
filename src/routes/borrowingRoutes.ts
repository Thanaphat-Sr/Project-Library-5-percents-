import express from 'express';
import BorrowingHistoryService from '../services/borrowingService';

const router = express.Router();
const borrowingHistoryService = new BorrowingHistoryService();

router.post('/', async (req, res) => {
    const { borrower, numberOfBooks, dueDate, returnTime } = req.body;
    try {
        const newHistory = await borrowingHistoryService.createBorrowing(borrower, numberOfBooks, new Date(dueDate), returnTime ? new Date(returnTime) : undefined);
        res.status(201).json(newHistory);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/', async (req, res) => {
    try {
        const histories = await borrowingHistoryService.getAllBorrowings();
        res.status(200).json(histories);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/dueDate', async (req, res) => {
    const { dueDate } = req.query;
    try {
        const histories = await borrowingHistoryService.getBorrowingHistoriesByDueDate(new Date(dueDate as string));
        res.status(200).json(histories);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/unreturned', async (req, res) => {
    try {
        const histories = await borrowingHistoryService.getUnreturnedBooks();
        res.status(200).json(histories);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;