import { Component, OnInit } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos/vuelos.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {

  vuelo : any;
  vuelosForm : FormGroup;
  langs: String[] = [];
  buscarRefFrom: FormGroup;
  testModal: Modal | undefined

  constructor(
    public fb: FormBuilder,
    public vuelosServices: VuelosService,
    private translate: TranslateService,
    

  ) {this.translate.setDefaultLang('en');
  this.translate.use('es');
  this.translate.addLangs(['es', 'en']);
  this.langs = this.translate.getLangs(); }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.vuelosForm = this.fb.group({
      vueloId : [''],
      capacidad:['',Validators.required],
      fecha:['',Validators.required],
      hora:['',Validators.required],
      itinerarioId:['',Validators.required],
      pasajeId:['',Validators.required],
      ref: ['',Validators.required]
    })
    this.vuelosServices.getAllVuelo().subscribe(resp=>{
      this.vuelo = resp
    }, error =>{console.error(error)})
    this.buscarRefFrom = this.fb.group({
      ref: ['',Validators.required],

    })
  }

  buscar(ref:string): void{
    this.vuelosServices.searRef(ref).subscribe(resp=>{

    })
  }
  // open(){
  //   this.testModal = new bootstrap.Modal((document.getElementById('modal')as HTMLInputElement).value,{
  //     keyboard: false,
      
  //   })
  //   console.log("aqui estamos")
  //   this.testModal?.show();
  // }
}
