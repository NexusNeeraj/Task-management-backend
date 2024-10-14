//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req, res) => {
      try{
            const {id} = req.params;
            const todo = await Todo.findByIdAndDelete( 
                  {_id:id}
            );
            
            if(!todo){
                  return res.status(404)
                  .json({
                        success:false,
                        message:"Given id not found in database."
                  })
            }

            //send a json response with a success flag
            res.status(200).json({
                  success:true,
                  message:'Deleted Successfully!'
            });
      }
      catch(err){
            console.error(err);
            console.log(err);
            res.status(500)
            .json({
                  success:false,
                  data:"Internal server error",
                  message:err.message,
            })
      }
};