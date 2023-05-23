import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '*', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
