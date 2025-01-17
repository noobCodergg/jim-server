const express = require("express");
const { createProject, getProject, getProjectById, deleteProject, login } = require("../Controller/ProjectController");



const router = express.Router();

router.post('/createproject',createProject)
router.get('/getprojects',getProject)
router.get('/getprojectbyid/:id',getProjectById)
router.delete('/deleteproject/:id',deleteProject)
router.post('/login',login)

module.exports = router;