import { Component,OnInit,Input } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor() {console.log("constructor -> product") }

  ngOnChanges(){console.log("ngOnChanges -> product")}
  
  ngOnInit(): void {console.log("ngOnInit -> product")}

  ngAfterViewInit(){console.log("ngAfterViewInit -> product")}

  ngOnDestroy(){console.log("ngOnDestroy -> product")}


  

  @Input() product:Product={
    id: '',
    name: '',
    image: '',
    price: 0,
    description: ''
  };
}
