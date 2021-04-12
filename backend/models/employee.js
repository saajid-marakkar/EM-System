const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number },
    dateofjoining: { type: String },
    dateofbirth: { type: String },
    department: { type: String },
    skills: { type: String },
    leaves: { type: Number }
});

module.exports = { Employee };