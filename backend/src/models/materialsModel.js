//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require('../services/db');

//////////////////////////////////////////////////////
// INSERT MATERIAL INTO DATABASE
//////////////////////////////////////////////////////
module.exports.insertMaterial = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO Materials (teacher_id, title, content, tags)
        VALUES (?, ?, ?, ?);
    `;
    const VALUES = [data.teacher_id, data.title, data.content, data.tags];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//////////////////////////////////////////////////////
// SELECT ALL MATERIALS
//////////////////////////////////////////////////////
module.exports.selectAll = (callback) => {
    const SQLSTATEMENT = `
        SELECT * FROM Materials;
    `;

    pool.query(SQLSTATEMENT, callback);
}

//////////////////////////////////////////////////////
// DELETE MATERIAL BY ID
//////////////////////////////////////////////////////
module.exports.deleteMaterial = (data, callback) => {
    const SQLSTATEMENT = `
        DELETE FROM Materials
        WHERE id = ?;
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}
