import { bike } from "../model/userModel.js"

export const createBikerController = async(req, res, next) => {
    try {
        let bikeinfo = await bike.create(req.body);
        res.json({
            success: true,
            message: "Bike Info created successfully",
            bikeinfo: bikeinfo,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let reallAllBikeInfo = async(req, res, next) => {
    try {
        let bikeinfo = await bike.find({});
        res.json({
            success: true,
            message: "Bike Information read successfully",
            data: bikeinfo
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}