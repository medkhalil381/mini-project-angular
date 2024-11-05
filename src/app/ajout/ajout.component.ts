import { Component } from '@angular/core';
import { PartageService } from '../partage.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  animal={
    name:'',
    age:'',
    image:'',
    mat:''
  }
  add(){
    this.partage.animaux.push(this.animal)
    this.animal={
      name:'',
      age:'',
      image:'',
      mat:''
    }
  }
  constructor(public partage:PartageService){}
}
