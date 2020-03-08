import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductosService} from '../../services/productos.service';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private activedRoute: ActivatedRoute, private _productosService: ProductosService, private router: Router) {
_productosService.getProductos();
   }

  ngOnInit() {
  }
   buscarProducto(termino: string) {
 this.router.navigate(['/buscar', termino]);
 }
 tipos(termino: string) {
  this.router.navigate(['/categoria', termino]);
  }

}
