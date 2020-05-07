
const handleResponse =(result,req,res,next)=>{
  try{
    console.log("das",result);
    if(result.message === "success")
      return res.status(200).json(result)
    else
      return res.status(400).json(result)
  }
  catch(error){
    next(error);
  }
}

module.exports= handleResponse;