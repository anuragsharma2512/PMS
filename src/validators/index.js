import { body } from "express-validator";
import {AvailableUserRole} from "../utils/constant.js"


const userRegisterValidator = ()=>{
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is not valid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in Lowercase")
            .isLength({min:3})
            .withMessage("Username must be at least 3 characters long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({min:6})
            .withMessage("Password must be at least 6 characters long"),
        body("fullName")
            .optional()
            .trim()
    ]
}

const userLoginValidator = ()=>{
    return [
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is not valid"),
        body("password")
            .notEmpty()
            .withMessage("Password is required")
    ]
}

const userChangeCurrentPasswordValidator = ()=>{
    return [
        body("oldPassword")
            .notEmpty()
            .withMessage("Old password is required"),
        body("newPassword")
            .notEmpty()
            .withMessage("New password is required")
    ]
}

const userForgetPasswordValidator = ()=>{
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is requird")
            .isEmail()
            .withMessage("Email is not valid")
    ]
}

const userResetForgotPasswordValidator = ()=>{
    return [
        body("newPassword")
            .notEmpty()
            .withMessage("New password is required")
    ]
}

const createProjectValidator = ()=>{
    return [
        body("name")
            .notEmpty()
            .withMessage("Project name is required"),
        body("description")
            .optional()
    ]
}

const addMembertoProjectValidator = ()=>{
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is reqqired")
            .isEmail()
            .withMessage("Email is not valid"),
        body("role")
            .trim()
            .notEmpty()
            .withMessage("Role is required")
            .isIn(AvailableUserRole)
            .withMessage("Role is not valid")
    ]
}

export {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgetPasswordValidator,
    userResetForgotPasswordValidator,
    createProjectValidator,
    addMembertoProjectValidator
}