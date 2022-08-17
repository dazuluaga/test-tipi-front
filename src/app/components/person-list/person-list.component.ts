import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personModel } from 'src/app/shared/models/person.model';
import { TipiService } from '../../services/tipi.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personas: personModel[] = [];

  constructor(private _personaService: TipiService, private router: Router){}

  ngOnInit(): void {
    this.getPersonas()
  }

  async getPersonas() {
    this._personaService.getPerson().subscribe((data) => {
      data.forEach((element: personModel) => {
        this.personas.push({
          id: element.id,
          name: element.name,
          lastName: element.lastName,
          age: element.age

        })
      });
    });
  }

  eliminarPerson(datos: personModel, i: number){

    Swal.fire({
  title: 'Esta segur@?',
  text: "Se eliminara el dato de la tabla!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Si, Borrar Registro!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Borrado!',
      'Persona Eliminada.',
      'success'
    );
    this.personas.splice(i, 1);
    this._personaService.deletePersona(datos.id).subscribe(() => {
      this.router.navigate(['/list-person']);
    })
  }
})
  }

}
