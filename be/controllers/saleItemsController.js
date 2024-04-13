import {getTopAuthorsService} from '../services/saleItemsService.js';

async function getTopAuthorsController(req, res, pool) {
    try {
        let authorName = req.query.author_name || null;

        const topAuthors = await getTopAuthorsService(pool, authorName);

        res.json(topAuthors);
    } catch (error) {
        console.error('Error retrieving top authors', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export{
    getTopAuthorsController,
};
