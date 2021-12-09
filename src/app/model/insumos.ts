import { MateriaPrima } from "./materiaPrima";
import { Produto } from "./produto";

export interface Insumos {
  id?: number;
  produto: Produto;
  materiaPrima: MateriaPrima;
  quantidade: number;
}
