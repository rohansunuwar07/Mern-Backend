import { Category } from "../model/userModel.js";


export let createCategoryControllor = async (req,res,next) => {
  try {
    let categories = await Category.create(req.body);
    res.status(200).json({
        success:true,
        message:"Category created Successfully",
        data:categories
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
  }
}




export let readSpecificCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({}).populate({
      path: 'products',
      model: 'Product'
    });

    res.status(200).json({
      success: true,
      message: "Categories with Products found successfully",
      data: categories
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

