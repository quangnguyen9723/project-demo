import mongoose from 'mongoose';

const LocationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Location = mongoose.model('location', LocationSchema);
export default Location;