import { Component, OnInit,Input ,Output,EventEmitter,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() {console.log("constructor -> img") }
 
  ngOnChanges(changes:SimpleChanges){console.log("ngOnChanges -> img");   
                                      console.log(changes);
                                    }
  
  ngOnInit(): void {console.log("ngOnInit -> img");
                    this.counterFn=window.setInterval(()=> {
                                            this.counter+=1;
                                            console.log(this.counter);
                                            },1000);  
                  }

  ngDoCheck(){console.log("ngDoCheck -> img")}
    ngAfterContentInit(){console.log("ngAfterContentInit -> img")}
    ngAfterContentChecked(){console.log("ngAfterContentChecked -> img")}
    ngAfterViewInit(){console.log("ngAfterViewInit -> img")}
    ngAfterViewChecked(){console.log("ngAfterViewChecked -> img")} 

  ngOnDestroy(){console.log("ngOnDestroy -> img"); window.clearInterval(this.counterFn);}


  @Input() img = 'https://www.w3schools.com/w3css/img_lights.jpg';
                  
  @Output() imgActualizado = new EventEmitter();

  imageDefault='https://www.w3schools.com/w3css/img_lights.jpg';
  
  evitarError(){
    this.img = this.imageDefault;
  }
  evitarErrorImg2(){
    this.img2 = this.imageDefault;
  }
  actualizar(){
    console.log("CARGA CORRECTAMENTE ! (desde el hijo)");
    this.imgActualizado.emit()
  }


  counter=0;
  counterFn:number|undefined;
 

  @Input () img3 = '';
  @Input () img4 = '';
  // si volvemos el input un set se puede elegir cual oir en el onChange()
  img2:string='';
  @Input () 
  set changeImg2(newImg2:string){
    this.img2=newImg2;
    console.log("changeImg2 -> img2");
  }


  @Input() showImgUno=true;
  @Input() showImgDos=true;

}
