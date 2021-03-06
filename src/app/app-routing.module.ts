import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component'; 
import { ContactusComponent } from './contactus/contactus.component'; 
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
   {path:"home", component:HomeComponent},
   {path:"contactus", component:ContactusComponent},
   {path:"about", component: AboutComponent} 
];
@NgModule({
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class AppRoutingModule { } export const 
RoutingComponent = [HomeComponent,ContactusComponent,AboutComponent];