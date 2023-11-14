import mongoose from "mongoose";

const Record = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    address: String,
    gender: String,
});

export default mongoose.model('Record', Record);