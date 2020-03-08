import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { Producto } from '../../modelos/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  codigo: string;

  constructor(
    private productoService: ProductosService,
    private router: Router
  ) {
    console.log('estoy en el contructor');
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }
  verProducto(idx: number) {
    this.router.navigate(['/producto', idx]);
  }

  agregarProducto() {
    this.router.navigate(['/agregar']);
  }

  bajarStock(id: number) {
    this.productoService.bajarStock(id).subscribe(data => data);
    location.reload();
  }
}
