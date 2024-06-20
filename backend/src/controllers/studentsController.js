//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const model = require('../models/studentsModel'); // Importing the students model

module.exports.readStudentsByClass = (req, res, next) => {
    const data = {
        class: req.body.class
    }

    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "Class not found"
                });
            } else {
                res.status(200).json(results);
            }
        }
    }

    model.selectByClass(data, callback)
}

module.exports.readStudentById = (req, res, next) => {
    const data = {
        id: req.params.id
    }

    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "Student not found"
                });
            } else {
                res.status(200).json(results[0])
            }
        }
    }

    model.selectById(data, callback);
}

module.exports.createStudent = (req, res, next) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        proficiency: req.body.proficiency
    }

    const callback = (error, results, fields) => {
        if (error) {
            // Handle error and send a 500 Internal Server Error response
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            // Send a 201 Created response with the results
            res.status(201).json({
                id: results.insertId,
                name: data.name,
                email: data.email,
                class: data.class,
                proficiency: data.proficiency
            });
        }
    }

    model.insertStudent(data, callback);
}

module.exports.updateStudent = (req, res, next) => {
    const data = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        proficiency: req.body.proficiency
    }

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json({
                id: parseInt(data.id),
                name: data.name,
                email: data.email,
                class: data.class,
                proficiency: data.proficiency
            });
        }
    }

    model.updateStudent(data, callback);
}

module.exports.deleteStudent = (req, res, next) => {
    data = {
        id: req.params.id
    }
    
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error login:", error);
            res.status(500).json(error);
        } else {
            if (results.affectedRows == 0) {
                res.status(404).json({
                    message: "Student not found"
                });
            } else {
                // Send a 204 No Content response since the resource is successfully deleted
                res.status(204).send();
            }
        }
    }

    model.deleteById(data, callback);
}