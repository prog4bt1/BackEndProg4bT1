import { TipoVehiculoController } from "../controllers/tipoVehiculo.controllers";

export class TipoVehiculoRoutes {
    private tipoVehiculoController: TipoVehiculoController = new TipoVehiculoController(); 
    
    public routes(app): void {
        app.route('/tipoVehiculo')
        .get(this.tipoVehiculoController.obtenerTipoVehiculos)
        .post(this.tipoVehiculoController.crearTipoVehiculo);

        app.route('/tipoVehiculo/:id')
        .put(this.tipoVehiculoController.actualizarTipoVehiculo)
        .delete(this.tipoVehiculoController.eliminarTipoVehiculo);
    }
}