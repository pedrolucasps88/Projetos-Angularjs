import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-add-itens',
  templateUrl: './todo-button-add-itens.component.html',
  styleUrls: ['./todo-button-add-itens.component.scss']
})
export class TodoButtonAddItensComponent implements OnInit{
  @Output() public emitItemTaskList= new EventEmitter();
  public addItemTaskList: string="";
  constructor(){}
  ngOnInit(): void {
  }


  public submitItemTaskList(){
    this.addItemTaskList=this.addItemTaskList.trim();
      if(this.addItemTaskList){
        this.emitItemTaskList.emit(this.addItemTaskList);
        this.addItemTaskList="";
      }
  }

}
