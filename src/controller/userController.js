import { user } from "../model/userModel.js"

export const createUserController = async(req, res, next) => {
    try {
        let info = await user.create(req.body);
        res.json({
            success: true,
            message: "Data inserted successfully",
            info: info,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}