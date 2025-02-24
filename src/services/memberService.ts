import { PrismaClient } from '@prisma/client';

class MemberService {
    searchMembers(name: string | import("qs").ParsedQs | (string | import("qs").ParsedQs)[] | undefined, memberId: string | import("qs").ParsedQs | (string | import("qs").ParsedQs)[] | undefined) {
        throw new Error('Method not implemented.');
    }
    getMembersByName(arg0: string) {
        throw new Error('Method not implemented.');
    }
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createMember(data: { memberId: string; firstName: string; lastName: string; phoneNumber: string }) {
        return await this.prisma.member.create({
            data,
        });
    }

    async getAllMembers() {
        return await this.prisma.member.findMany();
    }

    async getMemberById(id: number) {
        return await this.prisma.member.findUnique({
            where: { id },
        });
    }

    async updateMember(id: number, data: { memberId?: string; firstName?: string; lastName?: string; phoneNumber?: string }) {
        return await this.prisma.member.update({
            where: { id },
            data,
        });
    }

    async deleteMember(id: number) {
        return await this.prisma.member.delete({
            where: { id },
        });
    }
}

export default MemberService;