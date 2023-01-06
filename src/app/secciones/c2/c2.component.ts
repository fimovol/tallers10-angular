import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  ngOnInit(): void {
    if(this.tarea != ""){
      this.boleano=false
    }else{
      this.boleano=true
    }
  }
  descripcion=""
  tarea=""
  array = new Array
  boleano = true
  agregar(){
    if(this.tarea!=""){
      this.array.push({'tarea' : this.tarea,'descripcion':this.descripcion})
    }
  }
}
