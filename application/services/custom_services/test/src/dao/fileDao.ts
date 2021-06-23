import * as mongoose from 'mongoose';
import fileModel from '../models/file';
import { CustomLogger } from '../config/Logger'


export class fileDao {
    private file = fileModel;
    constructor() { }
public GpCreate(fileData, callback){
new CustomLogger().showLogger('info', 'Enter into fileDao.ts: GpCreate')
let temp = new fileModel(fileData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from fileDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}