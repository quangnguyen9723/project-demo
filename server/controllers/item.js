import mongoose from 'mongoose';
import Item from '../models/item.js';
import ActionHistory from '../models/actionHistory.js';
import LocationHistory from '../models/locationHistory.js';
import Action from '../models/action.js';
import Location from '../models/location.js';

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}


export const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);  
        const result = await populateItemData(item);
        
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { user, location, action, timestamp } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

        const itemToUpdate = await Item.findById(id);

        const isMainAction = await checkMainAction(itemToUpdate.solution, action);
        let currentLocation = location || itemToUpdate.current_location;
        if (isMainAction) {
            currentLocation = 'N/A'
        }

        const actionHistory = new ActionHistory({ item_id: id, user: user, action: action, timestamp: timestamp });
        await actionHistory.save();
        if (location) {
            const locationHistory = new LocationHistory({ item_id: id, location, timestamp });
            await locationHistory.save();
        }
        const updatedItem = await Item.findByIdAndUpdate(id, {current_location: currentLocation}, { new: true });
        const result = await populateItemData(updatedItem);

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

const populateItemData = async (item) => {
    const locationHistory = await LocationHistory.find({ item_id: item._id }, {_id: 0, item_id: 0});
    const actionHistory = await ActionHistory.find({ item_id: item._id }, {_id: 0, item_id: 0});
    const actions = await Action.findOne({ solution: item.solution }, {_id: 0});
    const locations = await Location.find({}, {_id: 0});
    const locationList = locations.map(location => location.name);

    const result = {
        ...item._doc,
        ...actions._doc,
        location_list: locationList,
        location_history: locationHistory.slice(-6).reverse(),
        action_history: actionHistory.slice(-6).reverse(),
    }
    return result;
}

const checkMainAction = async (solution, action) => {
    const actions = await Action.findOne({ solution: solution }, {_id: 0});
    const mainAction = actions.action_main_2;
    return mainAction === action;
}