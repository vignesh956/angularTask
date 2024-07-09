import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './child-routes/dashboard/dashboard.component';
import { HomeComponent } from './child-routes/home/home.component';
import { AboutComponent } from './child-routes/about/about.component';
import { SettingsComponent } from './child-routes/settings/settings.component';
import { HelpComponent } from './child-routes/settings/help/help.component';
import { PasswordManagementComponent } from './child-routes/settings/password-management/password-management.component';
import { ProfileComponent } from './child-routes/settings/profile/profile.component';
import { ProductListComponent } from './child-routes/settings/routes-params/product-list/product-list.component';
import { ProductFullViewPageComponent } from './child-routes/settings/routes-params/product-full-view-page/product-full-view-page.component';
import { SalesProductListComponent } from './child-routes/settings/queryParams/sales-product-list/sales-product-list.component';
import { SalesProductFullViewComponent } from './child-routes/settings/queryParams/sales-product-full-view/sales-product-full-view.component';
import { ProductInfoComponent } from './routes-query-params/product-info/product-info.component';
import { Comp1Component } from './service-topic/comp1/comp1.component';
import { Comp2Component } from './service-topic/comp2/comp2.component';
import { Comp3Component } from './service-topic/comp3/comp3.component';
import { Comp4Component } from './service-topic/comp4/comp4.component';
import { ParentComponent } from './input-output-topic/parent/parent.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'dashboard' , component : DashboardComponent ,
    children : [
      {
        path:'homeInfo' , component : HomeComponent
      },
      {
        path:'about' , component : AboutComponent
      },
      {
        path:'settings' , component : SettingsComponent ,
        children : [
          {
            path:'help' , component : HelpComponent
          },
          {
            path:'password' , component : PasswordManagementComponent
          },
          {
            path:'profile' , component : ProfileComponent
          },
          {
            path:'',
            redirectTo:'profile' ,
            pathMatch:'full'
          }
        ]
      },
      {
        path:'',
        redirectTo:'homeInfo' ,
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path:'product-list/:id', component:ProductFullViewPageComponent
  },
  {
    path : 'productInfo-list' ,component:SalesProductListComponent
  },
  {
    path : 'productInfo-full-view' ,component:SalesProductFullViewComponent
  },
  {
    path:'productInfo-filter' , component:ProductInfoComponent

  },
  {
    path:'comp1' , component:Comp1Component

  },
  {
    path:'comp2' , component:Comp2Component

  },
  {
    path:'comp3' , component:Comp3Component

  },
  {
    path:'comp4' , component:Comp4Component

  },
  {
    path :'parent' , component : ParentComponent
  },
  {  
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
