//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const model = require('../models/teachersModel'); // Importing the teachers model

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