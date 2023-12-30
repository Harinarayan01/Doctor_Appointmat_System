const doctorModel=require('../models/doctorModel')
const userModel=require('../models/userModels')

const getAllUsersController=async(req,res)=>{
try{
const users=await userModel.find({})
res.status(200).send({
    success:true,
    message:'users data list',
    data:users
})
}catch(eroor){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error while fetching users',error

    })

}
}
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: 'Doctors data list',
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error while getting doctors data',
    });
  }
};

const changeAccountStatusController=async(res,req)=>{

}


module.exports={getAllDoctorsController,getAllUsersController,changeAccountStatusController}