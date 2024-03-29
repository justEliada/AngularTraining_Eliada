import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './pages/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ButtonAlertComponent } from './components/button-alert/button-alert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    ButtonComponent,
    InfoComponent,
    BottomNavComponent,
    ContactComponent,
    ButtonAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
