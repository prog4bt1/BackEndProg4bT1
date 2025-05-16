import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoVehiculo from '../models/tipoVehiculo.models';
import { exec } from 'child_process';

export class TipoVehiculoController {
    crearTipoVehiculo = (req: Request, res: Response) => {
        const nuevaTipoVehiculo = new TipoVehiculo({
            tipoVehiculo: req.body.tipoVehiculo,
            tarifa: req.body.tarifa,
            altura: req.body.altura

        });

        nuevaTipoVehiculo.save()
        .then(tipoVehiculoCreada => {
            res.status(201).json({
                ok: true,
                tipoVehiculo: tipoVehiculoCreada,
                message: 'TipoVehiculo creada'
            });
        })
        .catch(error => {
            res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoVehiculo no creada'
            });
            
        });
    }

    obtenerTipoVehiculos = (req: Request, res: Response) => {
        TipoVehiculo.find()
        .then(tipoVehiculos => {
            res.status(200).json({
                ok: true,
                tipoVehiculos: tipoVehiculos
            });
            /*
                [
                    {
                        _id: "kfhsdkfhskfhsd",
                        tipoVehiculo: "ESPAÑOL"
                    },
                    {
                        _id: "kfhsdkfhskfhsd",
                        tipoVehiculo: "QUÍMICA"
                    }
                ]
            */
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        });
    }

    actualizarTipoVehiculo = (req: Request, res: Response) => {
        TipoVehiculo.findByIdAndUpdate(req.params.id,{
            tipoVehiculo: req.body.tipoVehiculo
        })
        .exec()
        .then(tipoVehiculoActualizada => {
            res.status(200).json({
                ok: true,
                tipoVehiculo: tipoVehiculoActualizada
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoVehiculo no actualizada'
            });
        });
    }

    eliminarTipoVehiculo = (req: Request, res: Response) => {
        TipoVehiculo.findByIdAndDelete(req.params.id)
        .then(tipoVehiculoEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoVehiculo eliminada'
                });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoVehiculo no eliminada'
            });
        });
    }
}