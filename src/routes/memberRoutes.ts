import { Router } from 'express';
import MemberService from '../services/memberService';

const router = Router();
const memberService = new MemberService();

router.get('/', async (req, res) => {
    const members = await memberService.getAllMembers();
    res.json(members);
});

router.get('/search', async (req, res) => {
    const { name, memberId } = req.query;
    const members = await memberService.searchMembers(name, memberId);
    res.json(members);
});

export default router;