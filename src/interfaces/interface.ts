import * as Mongoose from 'mongoose';

export interface ITask extends Mongoose.Document {
    name: string;
    created_date: string;
    status: string;
}
