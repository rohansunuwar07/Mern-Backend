import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { webUser } from "../model/userModel.js";
import { secretKey } from "../utils/constant.js";
import { sendEmail } from "../utils/sendMail.js";


export let createWebUserControllor = async(req, res, next) => {
    try {
        // get data from frontend
        let data = req.body;

        // password has been hashed
        let hashedPassword = await bcrypt.hash(data.password, 10);

        data = {
            ...data,
            isVerification: false,
            password: hashedPassword,
        };

        // create user data 
        let result = await webUser.create(data);


        // generate token

        let infoObj = {
            _id: result._id,
        };

        let expiryInfo = {
            expiresIn: "1d",
        }

        let token = jwt.sign(infoObj, secretKey, expiryInfo);

        // send mail to user email

        await sendEmail({
            to: data.email,
            subject: "Account Registration",
            html: `<h1>Your account has been created successfully</h1>

            <a href="http://localhost:5173/verify-email?token=${token}">
            
            http://localhost:5173/verify-email?token=${token}`,
        });
        res.status(201).json({
            success: true,
            message: "WebUser created successfully.Verification link has been sent to your email.",
            result: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

export let verifyEmail = async(req, res, next) => {
    try {

        // Get Token

        let tokenString = req.headers.authorization;
        let tokenArray = tokenString.split(" ");
        let token = tokenArray[1];

        // vefiy token 
        let infoObj = await jwt.verify(token, secretKey);
        let userId = infoObj._id;

        let result = await webUser.findByIdAndUpdate(userId, {
            isVerification: true,
        });
        res.json({
            success: true,
            message: "Email verified successfully",
            result: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,

        })
    }
}

export let login = async(req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let user = await webUser.findOne({
            email: email
        })

        if (!user) {
            throw new Error("Invalid Credentials");
        }
        if (!user.isVerification) {
            throw new Error("Email is not valid");
        }

        let isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Invalid Credientials");
        }

        let infoObj = {
            id: user._id
        }
        let expiryInfo = {
            expiresIn: "12h"
        }

        let token = await jwt.sign(infoObj, secretKey, expiryInfo);

        res.status(200).json({
            success: true,
            message: "WebUser Login Successfully",
            data: user,
            token: token,
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


export let myProfile = async(req, res, next) => {
    try {
        let id = req._id;
        let result = await webUser.findById(id);
        res.status(200).json({
            success: true,
            message: "WebUSer profile read successfully",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}



export let updateProfile = async(req, res, next) => {
    try {
        let id = req._id;
        let data = req.body;
        delete data.email;
        delete data.password;

        let result = await webUser.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({
            success: true,
            message: "Webuser profile updated successfully",
            data: result,
        })
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}



export let updatePassword = async(req, res, next) => {
    try {
        let _id = req._id;
        let oldPassword = req.body.oldPassword;
        let newPassword = req.body.newPassword;
        let data = await webUser.findById(_id);

        let hashedPassword = data.password;

        let isValidPassword = await bcrypt.compare(oldPassword, hashedPassword);

        if (isValidPassword) {
            let newHashedPassword = await bcrypt.hash(newPassword, 10);
            let result = await webUser.findByIdAndUpdate(_id, {
                password: newHashedPassword
            }, {
                new: true
            });
            res.status(200).json({
                success: true,
                message: "Password Updated Successfully",
                data: result
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}



export let forgetPassword = async(req, res, next) => {
    try {
        let email = req.body.email;
        let result = await webUser.findOne({ email: email });
        if (result) {
            let infoObj = {
                id: result._id
            }
            let expiryInfo = {
                expiresIn: "1d",
            }

            let token = await jwt.sign(infoObj, secretKey, expiryInfo);

            await sendEmail({
                to: email,
                subject: "Reset your Password",
                html: `<h1>Please click this link to reset your password</h1>
        
                <a href="http://localhost:5173/reset-password?token=${token}"> 
                http://localhost:5173/reset-password?token=${token}
                </a>
                `,
            });
            res.status(200).json({
                success: true,
                message: "Password reset link has been sent to your email successfully",
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


export let resetPassword = async(req, res, next) => {
    try {
        console.log(req.body);
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let result = await webUser.findByIdAndUpdate(req._id, { password: hashedPassword }, { new: true });

        console.log(result.id);

        console.log(req._id);


        res.status(200).json({
            success: true,
            message: "Password reset successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


export let readAllWebUserControllor = async(req, res, next) => {
    try {
        let result = await webUser.find({});
        res.json({
            success: true,
            message: "Web User read Successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let readAllWebUserSpecificControllor = async(req, res, next) => {
    try {
        let result = await webUser.findById(req.params.id);
        res.json({
            success: true,
            message: "Web User specific read Successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}


export let updateWebUserSpecificControllor = async(req, res, next) => {
    try {
        let id = req.params.id;
        let data = req.body;
        delete data.email;
        delete data.password;
        let result = await webUser.findByIdAndUpdate(id, data, {
            new: true,
        });
        res.json({
            success: true,
            message: "WebUser Updated successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}

export let deleteWebUserControllor = async(req, res, next) => {
    try {
        let result = await webUser.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Web User Delete successfully",
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}