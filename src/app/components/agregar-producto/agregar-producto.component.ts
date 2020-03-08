import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../modelos/Producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  producto: Producto = new Producto();
  constructor(private router: Router, private service: ProductosService) { }

  ngOnInit() {
  }

Guardar() {
  console.log(this.producto);
  this.service.crearProducto(this.producto)
  .subscribe (data =>    {
    alert('Se Agrego con Exito...!!!');
    console.log(this.producto);
});
  this.router.navigate(['/productos']);
}}
