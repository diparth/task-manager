import { Request, Response } from 'express';
import * as Mongoose from 'mongoose';
import { taskSchema } from './model';

const Task = Mongoose.model('Task', taskSchema);

export class TaskController {

    public listAllTask(req: Request, res: Response): void {
        Task.find({}, (err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`All tasks listed: ${task}`);
            res.json(task);
        });
    }

    public createTask(req: Request, res: Response): void {
        let task = new Task(req.body);
        task.save((err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`Task created for: ${task}`);
            res.json(task);
        });
    }

    public readTask(req: Request, res: Response): void {
        Task.findById(req.params.taskId, (err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`ID ${req.params.taskId} -> task: ${task}`);
            res.json(task);
        });
    }

    public updateTask(req: Request, res: Response): void {
        Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`Task updated with id: ${req.params.taskId}`, task);
            res.json(task);
        });
    }
}
