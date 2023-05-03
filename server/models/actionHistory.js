import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';

const ActionHistorySchema = mongoose.Schema({
    item_id: {
        type: mongoose.ObjectId,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const ActionHistory = mongoose.model('ActionHistory', ActionHistorySchema);
export default ActionHistory;