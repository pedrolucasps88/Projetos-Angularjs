import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  public tipoFiltro: string = ''; // Adicione esta linha
  private setAllPokemons: any;
  public getAllPokemons: any;
  
  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res =>{
        this.setAllPokemons = res.results;
        this.getAllPokemons= this.setAllPokemons;
      },
      error=>{
        
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
  filtrarPorTipo(tipo?: string) { // Adicione um argumento opcional aqui
    if (tipo) {
      const filter = this.setAllPokemons.filter((pokemon: any) => {
        return pokemon.status.types.some((type: any) => type.type.name === tipo);
      });
      this.getAllPokemons = filter;
    } else {
      this.getAllPokemons = this.setAllPokemons;
    }
  }

  mostrarTodos() {
    this.tipoFiltro = ''; // Redefine o tipo de filtro para vazio
    this.getAllPokemons = this.setAllPokemons; // Restaura a lista completa de Pokémons
  }
}
