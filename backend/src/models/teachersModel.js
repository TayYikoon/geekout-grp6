//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require('../services/db');

//////////////////////////////////////////////////////
// SELECT ALL TEACHERS
//////////////////////////////////////////////////////
module.exports.selectAll = (callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Teachers;
        `;
    
    pool.query(SQLSTATEMENT, callback);
}

//////////////////////////////////////////////////////
// SELECT TEACHER BY TOKEN
//////////////////////////////////////////////////////
module.exports.selectByEmail = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Teachers
        WHERE email = ?;
        `
    const VALUES = [data.email];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

//////////////////////////////////////////////////////
// INSERT EMAIL AND PASSWORD INTO DATABASE
//////////////////////////////////////////////////////
module.exports.insertTeacher = (data, callback) =>
    {
        const SQLSTATEMENT = `
            INSERT INTO Teachers (name, email, password_hash, subject, class)
            VALUES (?, ?, ?, ?, ?);
            `;
        const VALUES = [data.name, data.email, data.password_hash, data.subject, data.class];
    
        pool.query(SQLSTATEMENT, VALUES, callback);
    }