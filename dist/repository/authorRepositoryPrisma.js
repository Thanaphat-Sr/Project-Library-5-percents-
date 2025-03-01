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
const authorService_1 = __importDefault(require("../services/authorService"));
class authorRepositoryPrisma {
    deleteAuthor(arg0) {
        throw new Error('Method not implemented.');
    }
    updateAuthor(arg0, body) {
        throw new Error('Method not implemented.');
    }
    getAuthorById(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor() {
        this.authorService = new authorService_1.default();
    }
    getAllAuthors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authors = yield this.authorService.getAllAuthors();
            res.json(authors);
        });
    }
    createAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield this.authorService.createAuthor(req.body);
            res.status(201).json(author);
        });
    }
}
exports.default = authorRepositoryPrisma;
