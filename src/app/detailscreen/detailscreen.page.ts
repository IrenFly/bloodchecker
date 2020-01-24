import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DatastorageService } from '../services/datastorage.service';

@Component({
  selector: 'app-detailscreen',
  templateUrl: './detailscreen.page.html',
  styleUrls: ['./detailscreen.page.scss'],
})
export class DetailscreenPage implements OnInit {

  constructor(private modalCtrl: ModalController, public dataStorage: DatastorageService) { }

  ngOnInit() {
  }

  close(): void {
    this.modalCtrl.dismiss();
  }
}
