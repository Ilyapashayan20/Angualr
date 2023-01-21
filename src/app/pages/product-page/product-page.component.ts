import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/moduls/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
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
