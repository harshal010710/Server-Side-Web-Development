import Mongoose from "mongoose";

const todoSchema = new Mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		complete:{
			type: Boolean,
			default: false
		},
		createdBy:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		subTodos:[
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SubTodo"
			}
		]
	},
	{timestamps:true})

export const Todo = Mongoose.model("Todo",todoSchema)