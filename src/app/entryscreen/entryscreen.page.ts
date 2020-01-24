import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DatastorageService } from '../services/datastorage.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-entryscreen',
  templateUrl: './entryscreen.page.html',
  styleUrls: ['./entryscreen.page.scss'],
})
export class EntryscreenPage {
  public entryGlucose: number;
  public entryNotes: string;

  constructor(private modalCtrl: ModalController, public dataStorage: DatastorageService) { }

  close(): void {
    this.modalCtrl.dismiss();
  }

  saveEntry() {
    let glucose: number = this.entryGlucose;
    let notes: string = this.entryNotes;

    this.dataStorage.createEntry(glucose, notes);
    this.close();
  }

}
