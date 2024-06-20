//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const model = require('../models/teachersModel'); // Importing the teachers model

//////////////////////////////////////////////////////
// CONTROLLER FOR LOGIN
//////////////////////////////////////////////////////
module.exports.login = (req, res, next) => {
    // Checks if email and password fields are empty
    if (req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Username or password is undefined"
        });
        return;
    }

    // Prepare data object with username and email from request body
    const data = {
        email: req.body.email
    }

    // Callback function to handle the results of selectByUsername method
    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            // If user is not found in the SQL table, send a 404 Not Found response
            if (results.length == 0) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                // Store user's hash password and id in res.locals and move to the next middleware
                res.locals.hash = results[0].password_hash;
                res.locals.id = results[0].id;
                next();
            }
        }
    }

    // Call the selectByUsername method from the model with the prepared data and callback
    model.selectByEmail(data, callback);
}

//////////////////////////////////////////////////////
// CONTROLLER FOR CHECKING IF EMAIL EXISTS
//////////////////////////////////////////////////////
module.exports.checkEmailExist = (req, res, next) =>
{
    // Check if name, email, password, subject or class is empty
    if (req.body.name == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Name, email, or password is undefined"
        });
        return;
    }

    const data = {
        email: req.body.email
    }

    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error register:", error);
            res.status(500).json(error);
        } else {
            // If user is not found in the SQL table, send a 404 Not Found response
            if (results.length == 0) {
                next();
            } else {
                res.status(409).json({
                    message: "User already exists"
                });
            }
        }
    }

    model.selectByEmail(data, callback)
}

//////////////////////////////////////////////////////
// CONTROLLER FOR REGISTER
//////////////////////////////////////////////////////
module.exports.register = (req, res, next) => {
    // Prepare data object with username, email, and password hash from res.locals
    const data = {
        name: req.body.name,
        email: req.body.email,
        password_hash: res.locals.hash,
        subject: req.body.subject,
        class: req.body.class
    }

    // Callback function to handle the results of insertUser method
    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error register:", error);
            res.status(500).json(error);
        } else {
            // Store new user's id into res.locals along with success message and move to the next middleware
            res.locals.userId = results.insertId;
            res.locals.message = `User ${data.name} created successfully.`;
            next();
        }
    }

    // Call the insertUser method from the model with the prepared data and callback
    model.insertTeacher(data, callback);
}

//////////////////////////////////////////////////////
// CONTROLLER FOR SHOWING ALL TEACHERS
//////////////////////////////////////////////////////
module.exports.readAllTeachers = (req, res, next) =>
{
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readAllTeachers:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "Teachers not found"
                });
            }
            else res.status(200).json(results);
        }
    }

    model.selectAll(callback);
}

//////////////////////////////////////////////////////
// CONTROLLER FOR READING TEACHER BY ID
//////////////////////////////////////////////////////
module.exports.readTeacherById = (req, res, next) =>
{
    // Prepare data object with task_id from request parameters
    const data = {
        id: req.params.id
    }
    
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readTeacherById:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "Teacher not found"
                });
            } else res.status(200).json(results[0]);
        }
    }

    model.selectById(data, callback);
}

