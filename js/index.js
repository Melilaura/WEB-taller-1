//punto 1

const user = [{
        name: "",
        gender: "",
        email: "",
        country: "",
    }

]

// punto 2

//arreglitos yei :D
const products = [{
        name: "SANDALIAS CLARISSA II CUERO NAPPA CON PLATAFORMA",
        price: "620000",
        description: "Sandalia estilo gladiador",
        categorie: "Mujer",
        stock: "5",
    },
    {
        name: "GRYPHON SANDALIAS GLADIADOR DE CUERO BRANDO",
        price: "601000",
        description: "Sandalia estilo gladiador",
        categorie: "Mujer",
        stock: "7",
    },
    {
        name: "101 BOTAS DE CUERO SMOOTH Y COSTURA AMARILLA",
        price: "689000",
        description: "Botas 101 con 6 ojales",
        categorie: "Hombre",
        stock: "5",
    },
    {
        name: "BOTAS 1460 CUERO SMOOTH MUJER",
        price: "700000",
        description: "Botas 1460 de 8 ojales",
        categorie: "Mujer",
        stock: "2",
    },
    {
        name: "BOTAS JADON CUERO OXFORD PLATAFORMA",
        price: "835000",
        description: "Bota con 8 ojales y plataforma ",
        categorie: "Hombre",
        stock: "0",
    },
    {
        name: "BOTAS SINCLAIR DE CUERO CON PLATAFORMA",
        price: "904000",
        description: "Botas Sinclair con cremallera extraíble ",
        categorie: "Unisex",
        stock: "0",
    },
]

//punto 3

console.log("Los productos con precio igual o mayor a 500.000 son: ");
for (let index = 0; index < products.length; index++) {
    if (products[index].price >= 700000) {
        console.log(products[index].name);
    }
}

console.log("Los productos sin stock :c son: ");
for (let index = 0; index < products.length; index++) {
    if (products[index].stock == 0) {
        console.log(products[index].name);
    }
}