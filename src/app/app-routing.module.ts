import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ButtonAlertComponent } from './components/button-alert/button-alert.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'info', component: InfoComponent},
  { path: 'contact', component: ContactComponent}
  //{ redirectTo: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
