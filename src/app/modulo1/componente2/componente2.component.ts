import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  datos= new Array;
  nom = ""
  ape = ""
  agregar(){
    if(this.nom != ""){
      this.datos.push({'nombre' : this.nom,'apellido':this.ape})
      console.log(this.datos)
    }else{
      window.alert("los campos estan vacios")
    }
   
  }
  eliminar(indice:number){
    this.datos.splice(indice, 1)
  }
}
