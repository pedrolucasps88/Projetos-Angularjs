import { Component, OnInit } from '@angular/core';
import { ETheme } from './Enums/ETheme.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public icon: string=ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

constructor(){
  this.verificarHora();
}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }

    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
}


public verificarHora() {
  const agora = new Date();
  const horas = agora.getHours();

  if (horas >= 18) {
    if (!document.body.classList.contains('dark-theme')) {
      this.toggle(); // Muda para o tema escuro se não estiver ativado
    }
  } else {
    if (document.body.classList.contains('dark-theme')) {
      this.toggle(); // Muda para o tema claro se o tema escuro estiver ativado
    }
  }
}
}
