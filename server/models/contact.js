const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
});

export default mongoose.model('Contact', contactSchema);
