const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    projectLocation: String,
    projectDescription:String,
    projectDetails: [String],
    projectImages:[]
  },
  { timestamps: true }
);

module.exports = mongoose.model('projects', projectSchema);
