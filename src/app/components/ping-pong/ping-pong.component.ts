import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipiService } from 'src/app/services/tipi.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-ping-pong',
  templateUrl: './ping-pong.component.html',
  styleUrls: ['./ping-pong.component.css']
})
export class PingPongComponent implements OnInit {
  datos: any[] =[];
  constructor(private _personaService: TipiService, private router: Router) { }

  ngOnInit(): void {
  }

    pingPongCount(count: any){
    this._personaService.getPingPong(count).subscribe((sata) => {
      this.datos = sata;
      // this.router.navigate(['/list-person']);
    })
  }

}
