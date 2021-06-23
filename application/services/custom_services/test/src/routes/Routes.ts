import { Request, Response, NextFunction } from "express";
import { fileController } from '../controller/fileController';


export class Routes {
    private file: fileController = new fileController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/file').post(this.file.GpCreate);
     }

}