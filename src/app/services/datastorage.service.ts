import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Entry } from '../interfaces/entry';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  public entries: Entry[] = [];
  public loaded = false;

  constructor(private storage: Storage) { }

// Not Sure what this does, you may not need it at all.
  load(): Promise<boolean> {
    return new Promise ((resolve) => {
      this.storage.get('entries').then((entries) => {
        if (entries != null) {
          this.entries = entries;
        }
        this.loaded = true;
        resolve(true);
      });
    });
  }

// Create the entry and put it in entries Entry[]. This data comes from entryscreen modal Save button?
createEntry(entryGlucose, entryNotes): void {
  this.entries.push({
    id: this.entries.length + 1,
    glucose: parseInt(entryGlucose),
    notes: entryNotes,
    showNote: false,
    date: new Date()
  });

  this.save();
}

deleteEntry(entry): void {
  const index = this.entries.indexOf(entry);
  console.log(index);

  if (index > -1) {
    this.entries.splice(index, 1);
    this.save();
  }
}

save(): void {
  this.storage.set('entries', this.entries);
  console.log('Done');
}


}
