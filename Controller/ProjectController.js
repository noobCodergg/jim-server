const projectModel=require('../Model/ProjectModel');
const UserModel = require('../Model/UserModel');

exports.createProject = async (req, res) => {
  const { projectName, projectLocation, projectDescription, projectDetails, projectImages } = req.body;
  try {
    // Create a new project using the extracted data
    await projectModel.create({
      projectName,
      projectLocation,
      projectDescription,
      projectDetails,
      projectImages,
    });

    res.status(200).json({ message: "Project added successfully" });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Failed creating project", error: error.message });
  }
};

exports.getProject=async(req,res)=>{
    try{
        const respponse=await projectModel.find()
        res.status(200).json(respponse)
    }
    catch(error){
        res.status(500).json("Error fetching projects")
    }
}

exports.getProjectById=async(req,res)=>{
    const {id}=req.params;

    try{
        const response=await projectModel.findById(id)
        res.status(200).json(response)
    }catch(error){
        res.status(500).json("Error fetching project")
    }
}

exports.deleteProject=async(req,res)=>{
    const {id}=req.params;
    try{
        await projectModel.findOneAndDelete(id)
        res.status(200).json("Deleted succssfully")
    }catch(error){
        res.status(500).json("Error deleting project")
    }
}

exports.login=async(req,res)=>{
    const {username,password}=req.body
    try{
        const user=await UserModel.findOne({name:username})
        if(user){
            if(password===user.password){
                res.status(200).json(user.role)
            }
            else{
                res.status(500).json("Inavlid Credentials")
            }
        }
        else{
            res.status(500).json("user not found")
        }
    }catch(error){
        res.status(500).json("Error during login")
    }
}
