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
const express_1 = require("express");
const authorRepositoryPrisma_1 = __importDefault(require("../repository/authorRepositoryPrisma"));
const router = (0, express_1.Router)();
const authorController = new authorRepositoryPrisma_1.default();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorController.createAuthor(req, res);
    res.json(author);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield authorController.getAllAuthors(req, res);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorController.getAuthorById(parseInt(req.params.id));
    res.json(author);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorController.updateAuthor(parseInt(req.params.id), req.body);
    res.json(author);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorController.deleteAuthor(parseInt(req.params.id));
    res.json(author);
}));
exports.default = router;
