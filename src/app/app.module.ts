import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { ReferenciaPipe } from './pipes/referencia.pipe';
import { MonedaPipe } from './pipes/moneda.pipe';
import { CardComponent } from './component/card/card.component';
import { AddbookComponent } from './page/addbook/addbook.component';
import { UpdatebookComponent } from './page/updatebook/updatebook.component';
import { LoginComponent } from './page/login/login.component';
import { LoginFormComponent } from './component/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    ReferenciaPipe,
    MonedaPipe,
    CardComponent,
    AddbookComponent,
    UpdatebookComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
