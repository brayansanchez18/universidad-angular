// TODO: CREACION DE COMPONENTE DE FORMA MANUAL
// DEFINIMOS NUESTRA CLSAE CON LA PALABRA RESERVADA CLASS ANTEPONIENDO LA PALABRA RESERVADA EXPORT

import { Component } from '@angular/core';

@Component({
  // CON LA PROPIEADAD DE SELECTOR VAMOS A INDICAR EL NOMBRE DEL COMPONENTE Y ESTE MISMO VAMOS A ULTILIZARLO
  // EN NUESTRAS PAGINAS HTML PARA INCLUIR ESTE NUEVO COMPONENTE

  selector: 'app-personas',
  // DEFINIR AHORA UN ARCHIVO PARA INCLUIR EL TEXTO HTML QUE QUEREMOS AGREGAR EN ESTE COMPONENTE
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
  // TODO:TAMBIEN PODEMOS CREAR UN COMPONENTE EN LINEA SI LA INFORMACION ES BREVE
  // template: `<h1>Listado de personas</h1><app-persona></app-persona><app-persona></app-persona>`
})

export class PersonasComponent {
  deshabilitar = false;
  mensaje = '';
  titulo = 'ingeniero';
  mostrar = false;

  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }
}
