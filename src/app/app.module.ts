import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './child-routes/about/about.component';
import { HomeComponent } from './child-routes/home/home.component';
import { DashboardComponent } from './child-routes/dashboard/dashboard.component';
import { SettingsComponent } from './child-routes/settings/settings.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './child-routes/settings/routes-params/product-list/product-list.component';
import { ProductFullViewPageComponent } from './child-routes/settings/routes-params/product-full-view-page/product-full-view-page.component';
import { SalesProductFullViewComponent } from './child-routes/settings/queryParams/sales-product-full-view/sales-product-full-view.component';
import { SalesProductListComponent } from './child-routes/settings/queryParams/sales-product-list/sales-product-list.component';
import { ProductInfoComponent } from './routes-query-params/product-info/product-info.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './service-topic/comp1/comp1.component';
import { Comp2Component } from './service-topic/comp2/comp2.component';
import { Comp3Component } from './service-topic/comp3/comp3.component';
import { Comp4Component } from './service-topic/comp4/comp4.component';
import { ParentComponent } from './input-output-topic/parent/parent.component';
import { ChildComponent } from './input-output-topic/child/child.component';

@NgModule({
  declarations: [AppComponent , AboutComponent , HomeComponent , DashboardComponent,SettingsComponent ,ProductListComponent , ProductFullViewPageComponent,ProductInfoComponent,
    SalesProductFullViewComponent , SalesProductListComponent , Comp1Component , Comp2Component ,Comp3Component ,Comp4Component , ParentComponent ,ChildComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,CommonModule , FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
