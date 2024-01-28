import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
	username:{
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	email:{
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password:{
		type:String,
		required: true
	}
},
{
	timestamps: true
})

export const User = Mongoose.model("User",userSchema)