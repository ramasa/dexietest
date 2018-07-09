import { Component } from '@angular/core';
import { DexieService } from './dexie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ds: DexieService) {
  }

  add(){
    this.ds.add();
  }

}
