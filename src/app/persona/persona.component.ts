// TODO: CREACION DE UN COMPONENTE DESDE CLI DE ANGULAR
// $~ ng generate component persona
// $~ ng g c persona
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'juan';
  apellido: string = 'perez';
  edad: number = 28;
}
