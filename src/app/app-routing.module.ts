import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { Scopes } from './models/scopes';
import { Api1Component } from './Pages/api1/api1.component';
import { Api2Component } from './Pages/api2/api2.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomepageComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'api1',
    component: Api1Component,
    // canActivate: [AuthGuard],
    // data: {
    //   scopes: [Scopes.Api1]
    // }
  },
  {
    path: 'api2',
    component: Api2Component,
    canActivate: [AuthGuard],
    data: {
      scopes: [Scopes.Api2]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
