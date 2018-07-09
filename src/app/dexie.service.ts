import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import observable from 'dexie-observable';
import syncable from 'dexie-syncable';


interface Friend {
  id?: string;
  name?: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  public friends!: Dexie.Table<Friend, string>;

  constructor() {
    super("FriendDatabase", { addons: [observable, syncable] });
    this.version(1).stores({
      friends: "$$id,name,age"
    });
    console.log('init....');
  }

  add() {
    var item = { name: 'ram', age: 20 };
    try {
      this.friends.add(item);
    } catch (e) {
      console.log(e);
    }
  }
}
