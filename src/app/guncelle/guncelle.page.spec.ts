import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuncellePage } from './guncelle.page';

describe('GuncellePage', () => {
  let component: GuncellePage;
  let fixture: ComponentFixture<GuncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
