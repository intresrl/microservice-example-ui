import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRouting } from './app.router';
import { ColorConverterComponent } from './component/color-converter/color-converter.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { I3way } from './constants';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Hsl2hexService } from './service/hsl2hex.service';
import { Rgb2hexService } from './service/rgb2hex.service';
import { Rgb2hslService } from './service/rgb2hsl.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ColorConverterComponent,
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent
      ],
      imports: [
        AppRouting,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        },
        I3way
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
