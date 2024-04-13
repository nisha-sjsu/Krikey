import {getTopAuthorsRepository} from '../repositories/saleItemsRepository.js';

async function getTopAuthorsService(pool, authorName) {
    return await getTopAuthorsRepository(pool, authorName);
}

export {
    getTopAuthorsService,
};
