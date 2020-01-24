import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailscreenPage } from './detailscreen.page';

describe('DetailscreenPage', () => {
  let component: DetailscreenPage;
  let fixture: ComponentFixture<DetailscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
