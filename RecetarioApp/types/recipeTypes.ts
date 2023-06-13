type Recipe = {
    id: number;
    nombre: string;
    personas: number;
    imagen: string;
    ingredientes: Ingredient[]
}

type Ingredient = {
    nombre: string;
    cantidad: string
}