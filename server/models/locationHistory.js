import mongoose from 'mongoose';

const LocationHistorySchema = mongoose.Schema({
    item_id: {
        type: mongoose.ObjectId,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

const LocationHistory = mongoose.model('LocationHistory', LocationHistorySchema);
export default LocationHistory;