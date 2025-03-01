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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borrowingService_1 = __importDefault(require("../services/borrowingService"));
const router = express_1.default.Router();
const borrowingHistoryService = new borrowingService_1.default();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrower, numberOfBooks, dueDate, returnTime } = req.body;
    try {
        const newHistory = yield borrowingHistoryService.createBorrowing(borrower, numberOfBooks, new Date(dueDate), returnTime ? new Date(returnTime) : undefined);
        res.status(201).json(newHistory);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const histories = yield borrowingHistoryService.getAllBorrowings();
        res.status(200).json(histories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get('/dueDate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dueDate } = req.query;
    try {
        const histories = yield borrowingHistoryService.getBorrowingHistoriesByDueDate(new Date(dueDate));
        res.status(200).json(histories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get('/unreturned', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const histories = yield borrowingHistoryService.getUnreturnedBooks();
        res.status(200).json(histories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
