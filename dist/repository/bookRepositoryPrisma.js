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
const bookService_1 = __importDefault(require("../services/bookService"));
class bookRepositoryPrisma {
    createBook(body) {
        throw new Error('Method not implemented.');
    }
    constructor() {
        this.bookService = new bookService_1.default();
    }
    getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookService.getAllBooks();
            res.json(books);
        });
    }
    searchBooksByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = req.query.title;
            const books = yield this.bookService.searchBooksByTitle(title);
            res.json(books);
        });
    }
}
exports.default = bookRepositoryPrisma;
