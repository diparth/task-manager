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
        console.log(task);
        task.save((err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`Task created for: ${task}`);
            res.json(task);
        });
    }

    public readTask(req: Request, res: Response): void {
        console.log(req.params.taskId);
        Task.findById(req.params.taskId, (err, task) => {
            if (err) {
                res.send(err);
            }

            console.log(`ID ${req.params.taskId} -> task: ${task}`);
            res.json(task);
        });
    }
}
