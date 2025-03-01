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
const memberService_1 = __importDefault(require("../services/memberService"));
const router = (0, express_1.Router)();
const memberService = new memberService_1.default();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield memberService.getAllMembers();
    res.json(members);
}));
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, memberId } = req.query;
    const members = yield memberService.searchMembers(name, memberId);
    res.json(members);
}));
exports.default = router;
