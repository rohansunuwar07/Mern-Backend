import { teacher } from "../model/userModel.js"

export let createTeacherController = async(req, res, next) => {
    try {
        let teach = await teacher.create(req.body);
        res.json({
            success: true,
            message: "Teacher data inserted Successfully",
            teach: teach,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}