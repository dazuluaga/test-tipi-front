import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute ,Router } from '@angular/router';
import { TipiService } from '../../services/tipi.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-save-person',
  templateUrl: './save-person.component.html',
  styleUrls: ['./save-person.component.css']
})
export class SavePersonComponent implements OnInit {

  createPersona: FormGroup;
  submited = false;
  id: string | null;
  titulo = 'Agregar Persona';

  constructor(private fb: FormBuilder,
              private _service: TipiService,
              private router: Router,
              private aRoute: ActivatedRoute) {
                this.createPersona = this.fb.group({
                  name: ['', Validators.required],
                  lastName: ['', Validators.required],
                  age: ['', Validators.required],
                })
                this.id = this.aRoute.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
  }

  agregarPersona() {
    this.titulo = 'Agregar Persona';
    this.submited = true
      if (this.createPersona.invalid) {
        return;
      }

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Persona Registrada',
        showConfirmButton: false,
        timer: 1500
      });


    const persona: any = {
      name: this.createPersona.value.name,
      lastName: this.createPersona.value.lastName,
      age: this.createPersona.value.age,

    }
    this._service.createPersona(persona).subscribe(resp => {


      this.router.navigate(['/list-usuarios']);
      // this._toastr.success('El Usuario Fue Registrado Exitosamente!!','Empleado Registrado', {
      //   positionClass: 'toast-bottom-right'
      // })
    });

  }

  onSubmit(){
    this.agregarPersona();
  }

}
