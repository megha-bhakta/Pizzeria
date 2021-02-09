import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NvmenuComponent } from './components/nvmenu/nvmenu.component';
import { MenudetailsComponent } from './components/menudetails/menudetails.component';
import { PizzamenuService } from './services/pizzamenu.service';
import { routes } from './routes';
import { baseURL } from './baseURL';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from './components/menu/menu.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NvmenuComponent,
    MenudetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [PizzamenuService,
    {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
