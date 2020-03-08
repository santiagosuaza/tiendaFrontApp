import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosService } from './services/productos.service';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    NavbarComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
