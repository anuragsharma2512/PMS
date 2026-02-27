import { Router } from "express";
import {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    addMemberToProject,
    getProjectMembers,
    updateMemberRole,
    deleteMember
} from "../controllers/project.controllers.js";

import { validate } from "../middlewares/validator.middlewar.js";
import { 
    createProjectValidator,
    addMembertoProjectValidator
 } from "../validators/index.js";
import { verifyJWT,validateProjectPermission } from "../middlewares/auth.middlewar.js"
import { AvailableUserRole, UserRolesEnnum } from "../utils/constant.js";


const router  =  Router();

router.use(verifyJWT)

router
    .route("/")
    .get(getProjects)
    .post( createProjectValidator(),validate,createProject)

router
    .route("/:projectId")
    .get(validateProjectPermission(AvailableUserRole),getProjectById)
    .put(
        validateProjectPermission([UserRolesEnnum.ADMIN,UserRolesEnnum.MEMBER]),
        createProjectValidator(),
        validate,
        updateProject
    )
    .delete(
        validateProjectPermission([UserRolesEnnum.ADMIN]),
        deleteProject
    )

router
    .route("/:projectId/member")
    .get(getProjectMembers)
    .post(
        validateProjectPermission([UserRolesEnnum.ADMIN]),
        addMembertoProjectValidator(),
        validate,
        addMemberToProject
    )

router
    .route("/:projectId/member/:userId")
    .put(
        validateProjectPermission([UserRolesEnnum.ADMIN]),
        updateMemberRole
    )
    .delete(
        validateProjectPermission([UserRolesEnnum.ADMIN]),
        deleteMember
    )

export default router;