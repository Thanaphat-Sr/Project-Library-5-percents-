import { Router } from 'express';
import authorRepositoryPrisma from '../repository/authorRepositoryPrisma';

const router = Router();
const authorController = new authorRepositoryPrisma();

router.post('/', async (req, res) => {
    const author = await authorController.createAuthor(req, res);
    res.json(author);
});

router.get('/', async (req, res) => {
    await authorController.getAllAuthors(req, res);
});

router.get('/:id', async (req, res) => {
    const author = await authorController.getAuthorById(parseInt(req.params.id));
    res.json(author);
});

router.put('/:id', async (req, res) => {
    const author = await authorController.updateAuthor(parseInt(req.params.id), req.body);
    res.json(author);
});

router.delete('/:id', async (req, res) => {
    const author = await authorController.deleteAuthor(parseInt(req.params.id));
    res.json(author);
});

export default router;