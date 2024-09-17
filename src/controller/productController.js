import { Product } from "../model/userModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductAndAddToCategory = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);
  
      res.status(201).json({
        success: true,
        message: "Product created and added to categories successfully",
        data: product
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };
  


export let readAllProduct = async(req, res, next) => {
    try {
        let pdata = await Product.find({});
        res.status(201).json({
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
        let pnewdata = await Product.findById(req.params.id);
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
        let pnewdata = await Product.findByIdAndUpdate(req.params.id, req.body, {
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
        let pnewdata = await Product.findByIdAndDelete(req.params.id);
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

