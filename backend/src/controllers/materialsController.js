//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pdfParse = require('pdf-parse');
const model = require('../models/materialsModel'); // Importing the materials model

//////////////////////////////////////////////////////
// CONTROLLER FOR UPLOADING MATERIAL
//////////////////////////////////////////////////////
module.exports.uploadMaterial = async (req, res) => {
    const { title, tags } = req.body;
    const { buffer } = req.file;
    const teacherId = req.body.teacherId; // assuming the teacher ID is available in the request

    try {
        const data = await pdfParse(buffer);
        const content = data.text;
        const chunks = content.match(/[\s\S]{1,1000}/g); // Split into chunks of 1000 characters

        chunks.forEach((chunk, index) => {
            const materialData = {
                teacher_id: teacherId,
                title: `${title} - Part ${index + 1}`,
                content: chunk,
                tags: JSON.stringify(tags.split(','))
            };
            model.insertMaterial(materialData, (err) => {
                if (err) throw err;
            });
        });

        res.status(201).send({ message: 'Material uploaded and processed successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to process the PDF.' });
    }
};

//////////////////////////////////////////////////////
// CONTROLLER FOR GETTING ALL MATERIALS
//////////////////////////////////////////////////////
module.exports.getMaterials = (req, res) => {
    model.selectAll((err, results) => {
        if (err) {
            console.error("Error getMaterials:", err);
            res.status(500).json(err);
        } else {
            res.status(200).json(results.length > 0 ? results : []);
        }
    });
};

//////////////////////////////////////////////////////
// CONTROLLER FOR DELETING MATERIAL
//////////////////////////////////////////////////////
module.exports.deleteMaterial = (req, res) => {
    const { id } = req.params;
    model.deleteMaterial({ id }, (err, results) => {
        if (err) {
            console.error("Error deleteMaterial:", err);
            res.status(500).json(err);
        } else {
            res.status(200).json({ message: 'Material deleted successfully' });
        }
    });
};
