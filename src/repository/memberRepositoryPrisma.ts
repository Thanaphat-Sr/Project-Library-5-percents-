import { Request, Response } from 'express';
import MemberService from '../services/memberService';

class MemberRepositoryPrisma {
    private memberService: MemberService;

    constructor() {
        this.memberService = new MemberService();
    }

    public async getMembersByName(req: Request, res: Response): Promise<void> {
        const { name } = req.query;
        const members = await this.memberService.getMembersByName(name as string);
        res.json(members);
    }

    public async getMemberById(req: Request, res: Response): Promise<void> {
        const memberId = parseInt(req.params.id);
        const member = await this.memberService.getMemberById(memberId);
        res.json(member);
    }
}

export default MemberRepositoryPrisma;