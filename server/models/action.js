import mongoose from 'mongoose';

const ActionSchema = mongoose.Schema({
    solution : {
        type: String,
        required: true,
        unique: true,
    },
    action_main_1: {
        type: String,   
        required: true,
    },
    action_main_2: {
        type: String,
        required: true,
    },
    action_location_1: {
        type: String,
        required: true,
    },
    action_location_2: {
        type: String,
        required: true,
    },
});

const Action = mongoose.model('Action', ActionSchema);
export default Action;