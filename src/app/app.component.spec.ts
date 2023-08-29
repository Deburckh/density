import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
 DsHeaderModule, DsImprintModule, DsBoxModule, DsButtonModule, DsNavigationBarModule, 
} from '@bmw-ds/components';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
         DsHeaderModule,  DsImprintModule.forRoot({
          phone: '5555555',
          electronicContact: 'change-me@bmwgroup.com',
        }),  DsBoxModule,  DsButtonModule,  DsNavigationBarModule, 
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
