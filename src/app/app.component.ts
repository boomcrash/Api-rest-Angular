import { Component ,OnInit} from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {console.log("constructor ->  app") }

  ngOnChanges(){console.log("ngOnChanges -> app")}
  
  ngOnInit(): void {console.log("ngOnInit -> app");}

  ngAfterViewInit(){console.log("ngAfterViewInit -> app")}

  ngOnDestroy(){console.log("ngOnDestroy -> app")}


  imgParent = 'https://th.bing.com/th/id/R.1c5e6332de2e3032163546c77d5a261c?rik=2QfYbhM0k1AVRg&pid=ImgRaw&r=0';
  imgParent2 = 'https://th.bing.com/th/id/R.937b971512b6394e9515eb657aa4aaa1?rik=3wy5HoO9ztTPAw&pid=ImgRaw&r=0';
  
  ConfirmarActualizacionImg(){
    console.log("CARGA CORRECTAMENTE IMG! (desde el padre)");
  }

  ConfirmarActualizacionImg2(){
    console.log("CARGA CORRECTAMENTE IMG 2 ! (desde el padre)");
  }

  products:Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: 'https://th.bing.com/th/id/R.1c5e6332de2e3032163546c77d5a261c?rik=2QfYbhM0k1AVRg&pid=ImgRaw&r=0',
      price: 100,
      description: 'tomate fresco para cocinar varios platillos deliciosos'
    },{
      id: '2',
      name: 'Producto 2',
      image: 'https://th.bing.com/th/id/R.1c5e6332de2e3032163546c77d5a261c?rik=2QfYbhM0k1AVRg&pid=ImgRaw&r=0',
      price: 200,
      description: 'tomate fresco para cocinar varios platillos deliciosos'
    },{
      id: '3',
      name: 'Producto 3',
      image: 'https://th.bing.com/th/id/R.1c5e6332de2e3032163546c77d5a261c?rik=2QfYbhM0k1AVRg&pid=ImgRaw&r=0',
      price: 300,
      description: 'tomate fresco para cocinar varios platillos deliciosos'
    },{
      id: '4',
      name: 'Producto 4',
      image: 'https://th.bing.com/th/id/R.1c5e6332de2e3032163546c77d5a261c?rik=2QfYbhM0k1AVRg&pid=ImgRaw&r=0',
      price: 400,
      description: 'tomate fresco para cocinar varios platillos deliciosos'
    }
  ]

  showImg=true;

  boton="Ocultar Imagen";
  toggleImg(){
    this.showImg=!this.showImg;
    if (this.boton=="Mostrar Imagen"){this.boton="Ocultar Imagen";} 
    else{ this.boton="Mostrar Imagen";}
  }

  showImg2=true;
  boton2="Ocultar Imagen";
  toggleImg2(){
    this.showImg2=!this.showImg2;
    if (this.boton2=="Mostrar Imagen"){this.boton2="Ocultar Imagen";} 
    else{ this.boton2="Mostrar Imagen";}
  }
  
}
