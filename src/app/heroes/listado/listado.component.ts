import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['spidenman','Iroman','Hulk','Thor'];
  borrados:string = '';
  borrarHeroe(){
    const borrado = this.heroes.shift() || '';
    this.borrados += borrado+(this.heroes.length>0?', ':'');
  }
}
