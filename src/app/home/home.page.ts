import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EntryscreenPage } from '../entryscreen/entryscreen.page';
import { DetailscreenPage } from '../detailscreen/detailscreen.page';

import { DatastorageService } from '../services/datastorage.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController, public dataStorage: DatastorageService) {}


  addEntry(): void {
    this.modalCtrl.create({
      component: EntryscreenPage
    }).then((modal) => modal.present());
  }

  openDetails(): void {
    this.modalCtrl.create({
      component: DetailscreenPage
    }).then((modal) => modal.present());
  }

  testButton(): void {
    console.log(this.dataStorage.entries);
  }

  deleteEntry(entry): void {
    this.dataStorage.deleteEntry(entry);
  }

  toggleShowNote(entry): void {
    entry.showNote = !entry.showNote;
  }



}
