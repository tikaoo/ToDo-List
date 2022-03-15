import { Component,OnInit, EventEmitter,Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 key = 'key'
 lista:any []=[]  

 ngOnInit(): void {
  let tarefa = localStorage.getItem(this.key) 
  if(tarefa){
    this.lista = JSON.parse(tarefa)
  }
 }
  adicionar(nomeTarefa : String,data:string){
    if(nomeTarefa.length ==0 || data.length == 0 ){
    return;
    }

    this.lista.push({id:this.lista.length, nome:nomeTarefa,data:data})
    this.salva()

  }
  deletar(id:number){
    this.lista.splice(this.lista.indexOf(id))
    this.mensagem2()
    this.salva()
  }

  salva():void{
    localStorage.setItem(this.key, JSON.stringify(this.lista))
  }
    
  @Output()
  evento : EventEmitter <any> = new EventEmitter<any>()
  
  eventoPersonalizado():void{
    this.evento.emit(this.lista=[]=[])
    this.mensagem()
    this.salva()
  } 
  constructor(private msg: MatSnackBar) {}

  mensagem():void {
    this.msg.open('Você Exluiu todos os itens','Fechar');
    }
    mensagem2():void {
      this.msg.open('Você Exluiu um item','Fechar');
}}


