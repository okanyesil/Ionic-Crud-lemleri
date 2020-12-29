import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EklePage } from './ekle.page';

describe('EklePage', () => {
  let component: EklePage;
  let fixture: ComponentFixture<EklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
