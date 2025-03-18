import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    fullName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    flat: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    defaultAddress: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Address = mongoose.model("Address", addressSchema);
