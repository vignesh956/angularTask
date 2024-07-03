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

@NgModule({
  declarations: [AppComponent , AboutComponent , HomeComponent , DashboardComponent,SettingsComponent ,ProductListComponent , ProductFullViewPageComponent,
    SalesProductFullViewComponent , SalesProductListComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,CommonModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
