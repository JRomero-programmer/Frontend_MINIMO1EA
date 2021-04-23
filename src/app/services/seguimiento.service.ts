import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Seguimiento } from "../models/seguimiento.model";

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  URL_API = 'http://localhost:4000/api/seguimientos'

  selectedSeguimiento: Seguimiento = {
    nombre: '',
    fechaSeguimiento: null,
    dni: '',
    telefono: null,
    fiebre: '',
    tosContinuaPersistente: '',
    dificultadRespiratoria: '',
    malestarGeneral: ''
  };
  seguimientos : Seguimiento[];

  constructor(private http: HttpClient) {

  }

  getSeguimientos() {
    return this.http.get<Seguimiento[]>(this.URL_API);
  }

  createSeguimiento(seguimiento: Seguimiento) {
    return this.http.post(this.URL_API, seguimiento);
  }

  deleteSeguimiento(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

}
