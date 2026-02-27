import {User} from '../models/user.models.js'
import {Project} from '../models/project.models.js'
import { Task } from '../models/task.models.js'
import { Subtask } from '../models/subtask.model.js'
import {ApiResponse} from '../utils/api-response.js'
import {ApiError} from '../utils/api-error.js'
import {asyncHandler} from '../utils/async-handler.js'
import mongoose from 'mongoose'
import { AvailableUserRole, UserRolesEnnum } from '../utils/constant.js'


const getTask = asyncHandler(async(req , res)=>{
    // test
})
const createTask = asyncHandler(async(req , res)=>{
    // test
})
const getTaskById = asyncHandler(async(req , res)=>{
    // test
})
const updateTask = asyncHandler(async(req , res)=>{
    // test
})
const deleteTask = asyncHandler(async(req , res)=>{
    // test
})
const createSubtask = asyncHandler(async(req , res)=>{
    // test
})
const updateSubtask = asyncHandler(async(req , res)=>{
    // test
})
const deleteSubtask = asyncHandler(async(req , res)=>{
    // test
})


export {
    createTask,
    createSubtask,
    deleteSubtask,
    deleteTask,
    getTask,
    getTaskById,
    updateSubtask,
    updateTask
}