import { Router } from "express";
import { changeCurrentPassword, forgotPasswordRequest, getCurrentUser, login, logoutUser, refreshAccessToken, registerUser,resendEmailVerification,resetForgotPassword,verifyEmail} from "../controllers/auth.controllers.js";

import { validate } from "../middlewares/validator.middlewar.js";
import { userChangeCurrentPasswordValidator, userForgetPasswordValidator, userLoginValidator, userRegisterValidator, userResetForgotPasswordValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middlewar.js"


const router  =  Router();

// unsecured rote
router.route("/register").post(userRegisterValidator(),validate ,registerUser)
router.route("/login").post(userLoginValidator(),validate,login)
router.route("/verify-email/:verificationToken").get(verifyEmail)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/forgot-password").post(userForgetPasswordValidator(),validate,forgotPasswordRequest)
router
    .route("/reset-password/:resetToken")
    .post(userResetForgotPasswordValidator(),validate,resetForgotPassword)

// secured route
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/current-user").post(verifyJWT, getCurrentUser)
router.route("/change-password").post(verifyJWT,userChangeCurrentPasswordValidator(),validate,changeCurrentPassword)
router.route("/resend-email-verification").post(verifyJWT,resendEmailVerification)


export default router;