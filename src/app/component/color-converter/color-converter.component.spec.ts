import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ColorConverterComponent } from './color-converter.component';
import { Hsl2hexService } from '../../service/hsl2hex.service';
import { Rgb2hexService } from '../../service/rgb2hex.service';
import { Rgb2hslService } from '../../service/rgb2hsl.service';
import { BackendConfig } from '../../constants';

describe('ColorConverterComponent', () => {
  let component: ColorConverterComponent;
  let fixture: ComponentFixture<ColorConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColorConverterComponent
      ],
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      providers: [
        BackendConfig,
        FormBuilder,
        Hsl2hexService,
        Rgb2hexService,
        Rgb2hslService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
