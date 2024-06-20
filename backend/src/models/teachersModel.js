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
// SELECT USER BY TOKEN
//////////////////////////////////////////////////////
module.exports.selectById = (data, callback) =>
{
    const SQLSTATEMENT = `
        SELECT * FROM Teachers
        WHERE id = ?;
        `
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
}

// //////////////////////////////////////////////////////
// // SELECT USER BY TOKEN
// //////////////////////////////////////////////////////
// module.exports.selectByTokenId = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User
//         WHERE id = ?;

//         SELECT points FROM Points
//         WHERE user_id = ?;
//         `;
//     const VALUES = [data.user_id, data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // SELECT USER BY USERNAME
// //////////////////////////////////////////////////////
// module.exports.selectByUsername = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User
//         WHERE username = ?;

//         UPDATE User
//         SET last_logged_on = CURRENT_TIMESTAMP
//         WHERE username = ?;
//         `;
//     const VALUES = [data.username, data.username];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // SELECT USER BY USERNAME OR EMAIL
// //////////////////////////////////////////////////////
// module.exports.selectByUsernameOrEmail = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User
//         WHERE username = ? OR email = ?;
//         `;
//     const VALUES = [data.username, data.email];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }
// //////////////////////////////////////////////////////
// // DEFINE SELECT OPERATION FOR SELECTING USERNAME AND EMAIL
// //////////////////////////////////////////////////////
// module.exports.selectUsernameAndEmail = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User WHERE username = ?;
//         SELECT * FROM User WHERE email = ?;
//         `;
//     const VALUES = [data.username, data.email];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // SELECT USER BY USER ID
// //////////////////////////////////////////////////////
// module.exports.selectById = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User
//         WHERE id = ?;
//         `;
//     const VALUES = [data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // SELECT USER BY USER ROLE
// //////////////////////////////////////////////////////
// module.exports.selectByRole = (callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT * FROM User
//         WHERE role = "user";
//         `;

//     pool.query(SQLSTATEMENT, callback);
// }

// //////////////////////////////////////////////////////
// // INSERT USER AND PASSWORD INTO DATABASE
// //////////////////////////////////////////////////////
// module.exports.insertUser = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         INSERT INTO User (username, email, password, role)
//         VALUES (?, ?, ?, "user");
//         `;
//     const VALUES = [data.username, data.email, data.password];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // DEFINE SELECT OPERATION FOR SELECTING TASK BY USER ID
// //////////////////////////////////////////////////////
// module.exports.selectTaskIds = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         SELECT task_id
//         FROM TaskProgress
//         WHERE user_id = ?;
//         `;
//     const VALUES = [data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // DEFINE INSERT OPERATION FOR INSERTING INTO POINTS TABLE
// //////////////////////////////////////////////////////
// module.exports.insertSinglePoints = (data, callback) => {
//     const SQLSTATEMENT = `
//         INSERT INTO Points (user_id, points)
//         VALUES (?, 0);
//     `;
//     const VALUES = [data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // DEFINE UPDATE OPERATION FOR UPDATING USER INFORMATION
// //////////////////////////////////////////////////////
// module.exports.updateById = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         UPDATE User
//         SET username = ?,
//             email = ?,
//             updated_on = CURRENT_TIMESTAMP
//         WHERE id = ?;
//         `;
//     const VALUES = [data.username, data.email, data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // DEFINE DELETE OPERATION FOR DELETING USER AND CORRESPONDING POINTS
// //////////////////////////////////////////////////////
// module.exports.deleteById = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         DELETE FROM User
//         WHERE id = ?;

//         DELETE FROM Points
//         WHERE user_id = ?;
//         `;
//     const VALUES = [data.user_id, data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }

// //////////////////////////////////////////////////////
// // DEFINE DELETE OPERATION FOR DELETING TASK PROGRESS BY USER ID
// //////////////////////////////////////////////////////
// module.exports.deleteTaskProgressById = (data, callback) =>
// {
//     const SQLSTATEMENT = `
//         DELETE FROM TaskProgress
//         WHERE user_id = ?;
//         `;
//     const VALUES = [data.user_id];

//     pool.query(SQLSTATEMENT, VALUES, callback);
// }