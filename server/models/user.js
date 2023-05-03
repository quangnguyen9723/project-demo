import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', UserSchema);
export default User;