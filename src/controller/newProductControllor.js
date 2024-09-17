import { product1 } from "../model/userModel.js";


export const createProductController = async (req, res, next) => {
  try {
    // let data = req.body;
    let result = await product1.create(req.body);
    res.json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllProductController = async (req, res, next) => {
  try {
    let result = await product1.find({});
    res.json({
      success: true,
      message: "Product read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificProductController = async (req, res, next) => {
  try {
    let result = await product1.findById(req.params.id);
    res.json({
      success: true,
      message: "Product read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    let result = await product1.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    let result = await product1.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
