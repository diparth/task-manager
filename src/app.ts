import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { Routes } from './api/task/route';

class App {
    public expressApp: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/task-master';
    public routes: Routes = new Routes();

    constructor() {
        this.expressApp = express();
        this.config();
        this.mongoSetup();
        this.mountRoutes();
    }

    private config(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl);
        mongoose.connection.once('open', () => {
            console.log('Server has connected!!');
        });
    }

    private mountRoutes(): void {
        // const router = express.Router();
        // router.get('/hello', (req, res) => {
        //     res.json({
        //         message: 'Hello, World!',
        //         path: '/hello'
        //     });
        // });
        //
        // this.expressApp.use('/', router);
        this.routes.routes(this.expressApp);
    }
}
export default new App().expressApp;
