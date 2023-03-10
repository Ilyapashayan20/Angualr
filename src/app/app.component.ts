import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './moduls/product';
import { ModalService } from './services/modal.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Angular App';

  // products: IProduct[] = []

  products$: Observable<IProduct[]>

  term = ''

  loading = false

  constructor(
    public productsService:ProductsService,
    public modalService: ModalService
    ){

  }

  ngOnInit(): void {
    this.loading = true

    this.productsService.getAll().subscribe(()=>{
      this.loading = false
    })
    }
  }



