import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.router';
import { ColorConverterComponent } from './component/color-converter/color-converter.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BackendConfig, I3way } from './constants';
import { Rgb2hexService } from './service/rgb2hex.service';
import { Hsl2hexService } from './service/hsl2hex.service';
import { Rgb2hslService } from './service/rgb2hsl.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorConverterComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    BackendConfig,
    I3way,
    Hsl2hexService,
    Rgb2hexService,
    Rgb2hslService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
