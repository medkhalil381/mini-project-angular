import { Component } from '@angular/core';
import { PartageService } from '../partage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
display=true;
constructor(public partage: PartageService) { 

}

}
