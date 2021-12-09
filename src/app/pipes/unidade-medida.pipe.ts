import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidadeMedida'
})
export class UnidadeMedidaPipe implements PipeTransform {

  transform(unidadeMedida, mostrarUnidade: string): string {

    switch (mostrarUnidade) {
      case "ML":
        return unidadeMedida + " Mililitros";
        break;
      case "L":
        return unidadeMedida + " Litros";
        break;
      case "G":
        return unidadeMedida + " Gramas";
        break;
      case "MG":
        return unidadeMedida + " Miligramas";
        break;
      case "KG":
        return unidadeMedida + " Kilogramas";
        break;
      case "T":
        return unidadeMedida + " Toneladas";
        break;
      default:
        return unidadeMedida + " Unidade desconhecida";
        break;
    }
  }

}
