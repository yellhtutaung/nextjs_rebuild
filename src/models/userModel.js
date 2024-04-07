const mongoose = require('mongoose');
// https://nesin.io/blog/fix-mongoose-cannot-overwrite-model-once-compiled-error
const userSchema = new mongoose.Schema({
        name:{
            type: String,
            required: 'Name must be at least 4 characters',
            minLength: 4,
            maxLength: 25
        },
        username:{
            type: String,
            required: 'Username is required',
            default: null,
            unique: true,
        },
        password:{
            type: String,
            required: 'Password must be at least 6 characters',
        },
    },
    { timestamps: true }
);
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
