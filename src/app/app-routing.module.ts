import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { AddbookComponent } from './page/addbook/addbook.component';
import { UpdatebookComponent } from './page/updatebook/updatebook.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'books', component: BooksComponent},
  {path: 'addbooks', component: AddbookComponent},
  {path: 'updatebook', component: UpdatebookComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
