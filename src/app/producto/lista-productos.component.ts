import { Component, NgModule, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    )
  };

  borrar(id: number){
    alert("Se va a eliminar el producto "+ id);
  }

}
