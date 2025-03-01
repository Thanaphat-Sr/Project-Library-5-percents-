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
const bookService_1 = __importDefault(require("../services/bookService"));
const router = express_1.default.Router();
const bookService = new bookService_1.default();
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { keyword, page = 1, pageSize = 10 } = req.query;
    try {
        const books = yield bookService.searchBooks(keyword, parseInt(page), parseInt(pageSize));
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
