import QualificationModel from '../models/qualifcation.js';

// Get All Qualifcations = Same as db.qualifcations.find()
export const getAllQualifcations = async (req, res) => {
    try {
        const qualifcations = await QualifcationModel.find();
        res.status(200).json(qualifcations);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Read a qualifcation by ID = Same as db.qualifcations.findOne({_id: ObjectId("id")})
export const getQualifcationById = async (req, res) => {
    try {
        const qualifcation = await QualifcationModel.findById(req.params.id);
        if (!qualifcation) {
            return res.status(404).json({ message: 'qualifcation not found' }); // 404 HTTP status code for not found
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Create a new qualifcation = Same as db.qualifcations.insertOne()
export const createQualifcation = async (req, res) => {
    try {
        const newQualifcation = new QualifcationModel(req.body);
        const savedQualifcation = await newQualifcation.save();
        res.status(201).json(savedQualifcation); // 201 HTTP status code for created
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Update a qualifcation by ID = Same as db.qualifcations.updateOne({_id: ObjectId("id")}, {$set: {...}})
export const updateQualifcation = async (req, res) => {
    try {
        const updatedQualifcation = await QualifcationModel.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });

        if (!updatedQualifcation){
            return res.status(404).json({ message: 'Qualifcation not found' }); // 404 HTTP status code for not found
        }

        res.status(200).json(updatedQualifcation);
    } catch (error) {
       res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Delete a qualifcation by ID = Same as db.qualifcation.deleteOne({_id: ObjectId("id")})
export const deleteQualifcation = async (req, res) => {
    try {
        const deletedQualifcation = await QualifcationModel.findByIdAndDelete(req.params.id);

        if (!deletedQualifcation){
            return res.status(404).json({ message: 'Qualifcation not found' }); // 404 HTTP status code for not found
        }

        res.status(200).json({ message: 'Qualifcation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}