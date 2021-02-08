import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NvmenuComponent } from './components/nvmenu/nvmenu.component';

export const routes: Routes=[
  {path:'home', component:HomeComponent},
  {path:'vegmenu', component:MenuComponent},
  {path:'nonvegmenu', component:NvmenuComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];
