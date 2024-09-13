import { category } from '../model/userModel.js';

export let createCategoryControllor = async (req,res,next) => {
  try {
    let categories = await category.create(req.body);
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


export let readSpecificCategory = async (req,res,next) => {
  try {
    //let result = await products.find({category:category_id}).populate('category');
    let result = await category.find({}).populate({
      path: "product",
      model: "Product",
    });
    res.status(200).json({
      success:true,
      message:"Product found Successfully",
      data:result
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
}
