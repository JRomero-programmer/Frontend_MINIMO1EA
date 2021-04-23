import { Component, OnInit } from '@angular/core';
import { SeguimientoService } from "../../services/seguimiento.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  constructor(public seguimientoService: SeguimientoService) { }

  ngOnInit(): void {
    this.getSeguimientos();
  }

  getSeguimientos() {
    this.seguimientoService.getSeguimientos().subscribe(
      (res) => {
        this.seguimientoService.seguimientos = res;
      },
      (err) => console.error(err)
    );
  }

  addSeguimiento(form: NgForm) {
    this.seguimientoService.createSeguimiento(form.value).subscribe(
      res => {
        this.getSeguimientos();
        form.reset();
      },
      err => console.error(err)
    )
  }

  deleteSeguimiento(id: string) {
    if(confirm('Estas seguro de querer eliminarlo?')) {
      this.seguimientoService.deleteSeguimiento(id)
        .subscribe(res => {
          this.getSeguimientos();
        }, 
        err => console.error(err))
    }
  }

}
