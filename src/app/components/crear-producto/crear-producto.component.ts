import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent {
  productoForm: FormGroup;

  constructor( private fb: FormBuilder, 
                private router: Router,
                private toastr: ToastrService) {
      this.productoForm = this.fb.group({
        identificador: ['', Validators.required],
        producto: ['', Validators.required],
        categoria: ['', Validators.required],
        estado: ['', Validators.required],
        cantidad: ['', Validators.required]
      })
  }

  ngOnInit(): void{

  }

  agregarProducto() {
    console.log(this.productoForm)

    const PRODUCTO: Producto = {
      identificador: this.productoForm.get('identificador')?.value,
      producto: this.productoForm.get('identificador')?.value,
      categoria: this.productoForm.get('identificador')?.value,
      estado: this.productoForm.get('identificador')?.value,
      cantidad: this.productoForm.get('identificador')?.value
    }
    this.toastr.success('El producto ha sido registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }
}
