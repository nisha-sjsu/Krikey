
async function getTopAuthorsRepository(pool, authorName) {
    let query = `
        SELECT a.name, SUM(si.item_price * si.quantity) AS total_sales
        FROM sale_items si
        JOIN books b ON si.book_id = b.id
        JOIN authors a ON b.author_id = a.id
    `;
    if (authorName) {
        query += ` WHERE a.name = $1 `;
    }
    query += `
        GROUP BY a.name
        ORDER BY total_sales DESC
        LIMIT 10;`;

    const params = authorName ? [authorName] : [];
    const result = await pool.query(query, params);
    return result.rows;
}

export {
    getTopAuthorsRepository,
};
