import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  clientesForm : FormGroup;
  actualizarForm : FormGroup;
  buscarForm: FormGroup;
  cliente : any;

  modal = true;
  // Alertas del buscador
  isAlert = false;
  alertMsg = "Pasajero no existe, lo debes registrar";
  isAlertSuccess = false;
  alertMsgSuccess ="Pasajero encontrado"

  
  constructor(
  public fb: FormBuilder,
  public clientesServices: ClienteService,
  ){}

  ngOnInit(): void {
    this.clientesForm =  this.fb.group({
      clienteId : [''],
      nombre : ['',Validators.required],
      edad : ['',Validators.required],
      telefono : ['',Validators.required],
      documento : ['',Validators.required],
      email : ['',Validators.email],
    })
    this.actualizarForm = this.fb.group({
      clienteId : [''],
      nombre : ['',Validators.required],
      edad : ['',Validators.required],
      telefono : ['',Validators.required],
      email : ['',Validators.email],
      documento : ['',Validators.required],
    })
      this.clientesServices.getAllCliente().subscribe(resp=>{
      this.cliente = resp
    }, error =>{console.error(error)})
    this.buscarForm = this.fb.group({
      documento : ['',Validators.required], })
  }

  guardar(): void{
    this.clientesServices.saveCliente(this.clientesForm.value).subscribe(resp=>{
      this.clientesForm.reset();
      this.cliente.push(resp);
    },
    error=>{console.error(error)})
  }

  actualizar(): void{
    this.clientesServices.idtCliente(this.actualizarForm.value).subscribe(resp=>{
      this.actualizarForm.reset();
      this.cliente.push(resp)
      this.actualizarForm.disable();
      this.cerrarModal()
    },error =>{console.error(error)})
  }

  cerrarModal() {
    setTimeout(() => {
      this.modal = false;
    }, 1000);
  }

  eliminar(clientes:any){
    this.clientesServices.deleteCliente(clientes.clienteId).subscribe(resp=>{
      if (resp===true) {
        this.cliente.pop(clientes);
      }
      this.clientesForm.reset();
    },error=>{console.error(error)})
  }  

  editar(clientes:any){
    this.actualizarForm.setValue({
      clienteId: clientes.clienteId,
      nombre : clientes.nombre,
      edad : clientes.edad,
      telefono : clientes.telefono,
      email : clientes.email,
      documento : clientes.documento
    })
  }

  buscar(documento:string): void{
    this.clientesServices.searchCliente(documento).subscribe(resp=>{

      if (resp == "") {
        this.isAlert = true;
        this.alertMsg;
        this.cerrarWarning();
      } else {
        this.isAlertSuccess = true;
        this.alertMsgSuccess;
        this.cerrarSuccess();
       }
       this.cliente = resp
    });
    
  }

  cerrarWarning() {
    setTimeout(() => {
      this.isAlert = false;
      this.isAlertSuccess = false;
    }, 2500);
  }
  cerrarSuccess() {
    setTimeout(() => {
      this.isAlertSuccess = false;
    }, 2000);
  }

}
