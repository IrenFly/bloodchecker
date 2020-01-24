import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntryscreenPage } from './entryscreen.page';

describe('EntryscreenPage', () => {
  let component: EntryscreenPage;
  let fixture: ComponentFixture<EntryscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
