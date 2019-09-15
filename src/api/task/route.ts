import * as express from 'express';
import { TaskController } from './controller';

export class Routes {
    public task: TaskController = new TaskController();

    public routes(app: express.Application): void {
        app.route('/all-tasks')
            .get(this.task.listAllTask);

        app.route('/add')
            .post(this.task.createTask);

        app.route('/task/:taskId')
            .get(this.task.readTask);

        app.route('/task/update/:taskId')
            .put(this.task.updateTask);
    }
}