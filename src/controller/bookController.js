import { book } from "../model/userModel.js"

export let createBookControllor = async(req, res, next) => {
    try {
        let kitab = await book.create(req.body);
        res.json({
            success: true,
            message: "Book added successfully",
            result: kitab,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Display Function


export let realAllBook = async(req, res, next) => {
    try {
        let display = await book.find({});
        res.json({
            success: true,
            message: "Book read successfully",
            data: display,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}