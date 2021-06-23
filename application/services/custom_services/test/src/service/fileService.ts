import { Request, Response } from 'express';
import {fileDao} from '../dao/fileDao';
import { CustomLogger } from '../config/Logger'
let file = new fileDao();

export class fileService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into fileService.ts: GpCreate')
     const  fileData = req.body;
     file.GpCreate(fileData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from fileService.ts: GpCreate')
         callback(response);
         });
    }


}