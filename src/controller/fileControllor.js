export const handleSingleFileController = async (req, res, next) => {
    try {
      let link = `http://localhost:3001/${req.file.filename}`;
      res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        result: link,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


  // export let displayImage = async (req,res,next) => {
  //   try {
  //     let result = await 
  //   } catch (error) {
      
  //   }
  // }
  
  
  export const handleMultipleFileController = async (req, res, next) => {
    try {
      let link = req.files.map((value, index) => {
        return `http://localhost:3001/${value.filename}`;
      });
      res.status(200).json({
        success: true,
        message: "Files uploaded successfully",
        result: link,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  