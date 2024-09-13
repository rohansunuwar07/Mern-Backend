import { products } from "../model/userModel.js"

export let createProductController = async(req, res, next) => {
    try {
        let prod = await products.create(req.body);
        res.json({
            success: true,
            message: "Product added Successfully",
            prod: prod,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


export let readAllProduct = async(req, res, next) => {
    try {
        let pdata = await products.find({});
        res.json({
            success: true,
            message: "Product Displayed Successfully",
            data: pdata,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


export let readSpecificProduct = async(req, res, next) => {
    try {
        let pnewdata = await products.findById(req.params.id);
        res.json({
            success: true,
            message: "Specific PRoduct find successfully",
            data: pnewdata,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


export let updateSpecificProduct = async(req, res, next) => {
    try {
        let pnewdata = await products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json({
            success: true,
            message: "Specific PRoduct update successfully",
            data: pnewdata,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}



export let deleteSpecificProduct = async(req, res, next) => {
    try {
        let pnewdata = await products.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Specific PRoduct delete successfully",
            data: pnewdata,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


export let productCategoryControllorsss = async (req,res,next) => {
  const {category_id} = req.query;
  try {
    let result = await products.find({category:category_id}).populate('category');
    res.status(200).json({
        success:true,
        message:"product category controllor",
        data:result
    })
  } catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
  }
}

