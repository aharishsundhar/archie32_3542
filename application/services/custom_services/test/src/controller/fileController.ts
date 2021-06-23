import { Request, Response } from 'express';
import { fileService } from '../service/fileService';
import { CustomLogger } from '../config/Logger'
let file = new fileService();

export class fileController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
file.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into fileController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from fileController.ts: GpCreate');
    })}


}