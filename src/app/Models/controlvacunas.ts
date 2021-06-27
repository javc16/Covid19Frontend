import { Ciudadano } from "./ciudadano";
import { Direccion } from "./direccion";

export class ControlVacunas {
    id?: number;
    idCiudadano?:number;
    ciudadano?:Ciudadano;
    idDireccion?:number;
    direccion?:Direccion;
    primeraDosis?:number;
    segundaDosis?:number;
    estado?:number;
}