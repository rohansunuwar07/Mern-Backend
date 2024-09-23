import { student } from "../model/userModel.js";


export const createStudentController = async (req, res, next) => {
  try {
    let result = await student.create(req.body);
    res.json({
      success: true,
      message: "Student created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllStudentController = async (req, res, next) => {
  try {
    let result = await student.find({});
    res.json({
      success: true,
      message: "Students read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudentController = async (req, res, next) => {
  try {
    let result = await student.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Student deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificStudentController = async (req, res, next) => {
  try {
    let result = await student.findById(req.params.id);
    res.json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudentController = async (req, res, next) => {
  try {
    let result = await student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Student updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
