import { RouterModule, Routes } from '@angular/router';
import { ColorConverterComponent } from './component/color-converter/color-converter.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/convert', pathMatch: 'full' },
  { path: 'convert', component: ColorConverterComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes,
  { enableTracing: true } // <-- debugging purposes only);
);
