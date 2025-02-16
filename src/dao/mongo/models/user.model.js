import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: Number,
    password: String,
    role: {
        type: String,
        default: "user"
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart"
    },
    active: {
        type: Boolean,
        default: true  
    }
});

export const userModel = mongoose.model(userCollection, userSchema);