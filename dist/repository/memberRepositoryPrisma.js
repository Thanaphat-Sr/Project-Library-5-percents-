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
const memberService_1 = __importDefault(require("../services/memberService"));
class MemberRepositoryPrisma {
    constructor() {
        this.memberService = new memberService_1.default();
    }
    getMembersByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.query;
            const members = yield this.memberService.getMembersByName(name);
            res.json(members);
        });
    }
    getMemberById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const memberId = parseInt(req.params.id);
            const member = yield this.memberService.getMemberById(memberId);
            res.json(member);
        });
    }
}
exports.default = MemberRepositoryPrisma;
