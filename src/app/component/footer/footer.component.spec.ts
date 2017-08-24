import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { I3way } from '../../constants';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const i3wayValues = {
    version: '0.1.0',
    company: 'in3',
    yearOfFirstRelease: '2016'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [
        {
          provide: I3way,
          useValue: i3wayValues
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as version '${i3wayValues.version}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.i3way.version).toEqual(i3wayValues.version);
  }));

  it(`should have as company '${i3wayValues.company}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.i3way.company).toEqual(i3wayValues.company);
  }));

  it(`should have as yearOfFirstRelease '${i3wayValues.yearOfFirstRelease}'`, async(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.i3way.yearOfFirstRelease).toEqual(i3wayValues.yearOfFirstRelease);
  }));

  it('should render footer disclaimer in a p tag', async(() => {
    const currentYear = new Date().getFullYear();
    const footerText = `\n` +
      `    Powered by ${i3wayValues.company} ©${i3wayValues.yearOfFirstRelease}-${currentYear}.\n` +
      `    Code licensed under an MIT-style License.\n` +
      `    Documentation licensed under CC BY 4.0.\n` +
      `    Version ${i3wayValues.version}.\n`;

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(footerText);
  }));
});
