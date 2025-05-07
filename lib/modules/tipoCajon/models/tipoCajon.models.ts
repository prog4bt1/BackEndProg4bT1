import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoCajon extends mongoose.Document {  
    tipocajon: string;
    Tarifa: Number;
    altura:Number;
}

 const TipoCajonSchema = new Schema(
    {
        tipocajon: {
            type: String,
            required: [true, 'tipocajon required'],
            unique: true
        },
        Tarifa: {
            type: Number,
            required: [true, 'tarifa required'],
            unique: true
        },
        altura: {
            type: Number,
            required: [true, 'tipocajon required'],
            unique: true
        }
    }
    
 );

const TipoCajon = mongoose.model<ITipoCajon>("TipoCajon", TipoCajonSchema);
export default TipoCajon;