export interface Producto {
  id: number;

  slug: string;

  codigo: string;

  nombre: string;

  categorias: string[];

  marcas: string[];

  perfumes?: {
    marca: string;
    nombre: string;
  }[];

  precio: number;

  imagenes: string[];

  ventas: number;

  nuevo: boolean;

  destacado: boolean;

  estado: 'activo' | 'agotado';

  visible: boolean;
}