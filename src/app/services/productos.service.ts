import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/Producto';

@Injectable()
export class ProductosService {
  constructor(private http: HttpClient) {}
  getProductos() {
    return this.http.get<Producto[]>(
      'http://localhost:8080/api/consultarTodos/'
    );
  }
  getProducto(id: string) {
    return this.http.get<Producto>('http://localhost:8080/api/consultar/' + id);
  }
  crearProducto(producto: Producto) {
    return this.http.post<Producto>(
      'http://localhost:8080/api/guardar',
      producto
    );
  }
  bajarStock(id: number) {
    return this.http.get<string>('http://localhost:8080/api/bajarStock/' + id);
  }
  }
