import { Schema, model } from 'mongoose';


const ItemSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    current_location: {
        type: String,
        required: true,
    },
});

const Item = model('Item', ItemSchema);
export default Item;