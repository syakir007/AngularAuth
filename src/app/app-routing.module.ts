import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPageComponent } from './Pages/api-page/api-page.component';
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
    path: 'apiPage',
    component: ApiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
