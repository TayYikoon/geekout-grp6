//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require('../services/db');

module.exports.selectByClass = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Students
        WHERE class = ?;
        `
    const VALUES = [data.class];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.selectById = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Students
        WHERE id = ?;
        `
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.insertStudent = (data, callback) =>
{
    const SQLSTATEMENT = `
        INSERT INTO Students (name, email, class, proficiency)
        VALUES (?, ?, ?, ?);
        `
    const VALUES = [data.name, data.email, data.class, data.proficiency];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.updateStudent = (data, callback) =>
{
    const SQLSTATEMENT = `
        UPDATE Students
        SET name = ?, email = ?, class = ?, proficiency = ?
        WHERE id = ?;
        `
    const VALUES = [data.name, data.email, data.class, data.proficiency, data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.deleteStudent = (data, callback) =>
{
    const SQLSTATEMENT = `
        DELETE FROM Students
        WHERE id = ?;
        `
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}