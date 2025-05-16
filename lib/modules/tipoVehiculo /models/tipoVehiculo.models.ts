import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoVehiculo extends mongoose.Document {  
    tipocajon: string;
    tarifa: Number;
    altura:Number;
}

 const TipoVehiculoSchema = new Schema(
    {
        tipoVehiculo: {
            type: String,
            required: [true, 'tipoVehiculo required'],
            unique: true
        },
        tarifa: {
            type: Number,
            required: [true, 'tarifa required'],
            unique: true
        },
        altura: {
            type: Number,
            required: [true, 'tipoVehiculo required'],
            unique: true
        }
    }
    
 );

const TipoVehiculo = mongoose.model<ITipoVehiculo>("TipoVehiculo", TipoVehiculoSchema);
export default TipoVehiculo;