import { string } from 'better-auth';
import mongoose , {Schema , Document} from 'mongoose'
export interface IBoard extends Document {
    name:string;
    userId: string;
    columns:mongoose.Types.ObjectId[]
    createdAt:Date
    updatedAt:Date

}

const BoardSchema = new Schema<IBoard>({
    name:{
        type:string ,
        required:true
    },
    userId:{
        type:string ,
        required:true,
        index:true
    },
    columns:[
        type:schema.Types.ObjectId,
        ref:"Column"
    ]
})