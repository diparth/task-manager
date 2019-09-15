import { Schema } from 'mongoose';

export const taskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});
