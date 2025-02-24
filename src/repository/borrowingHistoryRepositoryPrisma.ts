import { Request, Response } from 'express';
import BorrowingHistoryService from '../services/borrowingService';

class BorrowingRepositoryPrisma {
    private borrowingHistoryService: BorrowingHistoryService;
    borrowingService: any;

    constructor() {
        this.borrowingHistoryService = new BorrowingHistoryService();
    }

    public async getBorrowingHistory(req: Request, res: Response): Promise<void> {
        const history = await this.borrowingService.getAllBorrowingHistory();
        res.json(history);
    }

    public async getBorrowingByDueDate(req: Request, res: Response): Promise<void> {
        const dueDate = req.params.dueDate;
        const history = await this.borrowingService.getBorrowingByDueDate(dueDate);
        res.json(history);
    }

    public async getUnreturnedBooks(req: Request, res: Response): Promise<void> {
        const unreturnedBooks = await this.borrowingService.getUnreturnedBooks();
        res.json(unreturnedBooks);
    }
}

export default BorrowingRepositoryPrisma;