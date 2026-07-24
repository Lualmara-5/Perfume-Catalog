import { Producto } from '../models/producto.interface';

export const PRODUCTOS: Producto[] = [
    {
    id: 1,
    slug: 'le-beau-le-parfum',
    codigo: 'P001',
    nombre: 'Le Beau Le Parfum',
    categorias: ['Hombre'],
    marcas: ['Jean Paul Gaultier'],
    perfumes: undefined,
    precio: 130000,
    imagenes: [
        'assets/images/catalogo/product-list/le-beau-le-parfum.webp'
    ],
    ventas: 0,
    nuevo: false,
    destacado: true,
    estado: 'activo',
    visible: true
    },


    {
    id: 2,
    slug: 'yum-yum',
    codigo: 'P002',
    nombre: 'Yum Yum',
    categorias: ['Mujer'],
    marcas: ['Armaf'],
    perfumes: undefined,
    precio: 150000,
    imagenes: [
        'assets/images/catalogo/product-list/yum-yum.webp'
    ],
    ventas: 0,
    nuevo: true,
    destacado: false,
    estado: 'activo',
    visible: true
    },


    {
    id: 3,
    slug: 'millesime-imperial',
    codigo: 'P003',
    nombre: 'Millésime Impérial',
    categorias: ['Unisex'],
    marcas: ['Creed'],
    perfumes: undefined,
    precio: 110000,
    imagenes: [
        'assets/images/catalogo/product-list/millesime-imperial.webp'
    ],
    ventas: 0,
    nuevo: true,
    destacado: false,
    estado: 'activo',
    visible: true
    },

    
    {
    id: 4,
    slug: 'combo-sauvage-le-male-acqua',
    codigo: 'P004',
    nombre: 'Sauvage • Le Male • Acqua',
    categorias: ['Hombre', 'Combo'],
    marcas: ['Dior', 'Jean Paul Gaultier', 'Giorgio Armani'],
    perfumes: [
        {
            marca: "Dior",
            nombre: "Sauvage Eau de Parfum"
        },
        {
            marca: "Jean Paul Gaultier",
            nombre: "Le Male Le Parfum"
        },
        {
            marca: "Giorgio Armani",
            nombre: "Acqua Di Giò EDT"
        }
    ],
    precio: 220000,
    imagenes: [
        'assets/images/catalogo/product-list/combo-sauvage-le-male-acqua.webp'
    ],
    ventas: 0,
    nuevo: true,
    destacado: false,
    estado: 'activo',
    visible: true
    },

    {
    id: 5,
    slug: 'le-beau',
    codigo: 'P005',
    nombre: 'Le Beau',
    categorias: ['Hombre'],
    marcas: ['Jean Paul Gaultier'],
    perfumes: undefined,
    precio: 120000,
    imagenes: [
        'assets/images/catalogo/product-list/le-beau.webp'
    ],
    ventas: 0,
    nuevo: false,
    destacado: true,
    estado: 'activo',
    visible: true
    }
];