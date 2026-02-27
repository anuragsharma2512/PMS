import mongoose, {Schema} from "mongoose";
import {TaskStatusEnnum,AvailableTaskStatus} from "../utils/constant.js"

const taskSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description: String,
        project:{
            type: Schema.Types.ObjectId,
            ref:"Project",
            required:true
        },
        assignedTo:{
            type: Schema.Types.ObjectId,
            ref:"User",
        },
        assignedBy:{
            type: Schema.Types.ObjectId,
            ref:"User",
        },
        state:{
            type:String,
            enum:AvailableTaskStatus,
            default:TaskStatusEnnum.TODO
        },
        attachments:{
            type:[{
                url:String,
                mimetype: String,
                size: Number
            }],
            default:[]
        }
    },{timestamps: true}
)

export const Task = mongoose.model("Task",taskSchema)