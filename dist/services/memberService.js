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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class MemberService {
    searchMembers(name, memberId) {
        throw new Error('Method not implemented.');
    }
    getMembersByName(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    createMember(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.member.create({
                data,
            });
        });
    }
    getAllMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.member.findMany();
        });
    }
    getMemberById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.member.findUnique({
                where: { id },
            });
        });
    }
    updateMember(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.member.update({
                where: { id },
                data,
            });
        });
    }
    deleteMember(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prisma.member.delete({
                where: { id },
            });
        });
    }
}
exports.default = MemberService;
