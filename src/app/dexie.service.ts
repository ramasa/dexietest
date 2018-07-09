import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import 'dexie-observable';
import 'dexie-syncable';


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
    super("FriendDatabase", { addons: [Dexie.Observable, Dexie.Syncable] });
    this.version(1).stores({
      friends: "$$id,name,age"
    });
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
