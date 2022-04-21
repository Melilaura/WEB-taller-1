//point 1

const user = [{
        name: "Antonieta Josefina",
        gender: "no Binary",
        age: "42 years old",
        email: "yourAntoJosef@gmail.com",
        country: "Kansas",
        phone_number: "666-77-89",
    }

]

// point 2
const products = [{
        name: "SANDALIAS CLARISSA II CUERO NAPPA CON PLATAFORMA",
        price: "620000",
        description: "Sandalia estilo gladiador",
        categorie: "Mujer",
        stock: "5",
        image: '../images/shop/SANDALIAS CLARISSA II.jpg',
    },
    {
        name: "GRYPHON SANDALIAS GLADIADOR DE CUERO BRANDO",
        price: "601000",
        description: "Sandalia estilo gladiador",
        categorie: "Mujer",
        stock: "7",
        image: '../images/shop/GRYPHON SANDALIAS GLADIADOR DE CUERO BRANDO.jpg',
    },
    {
        name: "101 BOTAS DE CUERO SMOOTH Y COSTURA AMARILLA",
        price: "689000",
        description: "Botas 101 con 6 ojales",
        categorie: "Hombre",
        stock: "5",
        image: '../images/shop/101 BOTAS DE CUERO SMOOTH Y COSTURA AMARILLA.jpg',
    },
    {
        name: "BOTAS 1460 CUERO SMOOTH MUJER",
        price: "700000",
        description: "Botas 1460 de 8 ojales",
        categorie: "Mujer",
        stock: "2",
        image: '../images/shop/BOTAS 1460 CUERO SMOOTH MUJER.jpg',
    },
    {
        name: "BOTAS JADON CUERO OXFORD PLATAFORMA",
        price: "835000",
        description: "Bota con 8 ojales y plataforma ",
        categorie: "Hombre",
        stock: "0",
        image: '../images/shop/BOTAS JADON CUERO OXFORD PLATAFORMA.jpg',
    },
    {
        name: "BOTAS SINCLAIR DE CUERO CON PLATAFORMA",
        price: "904000",
        description: "Botas Sinclair con cremallera extraíble ",
        categorie: "Unisex",
        stock: "0",
        image: '../images/shop/BOTAS SINCLAIR DE CUERO CON PLATAFORMA.jpg',
    },
]

//point 3

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



//point 4

const shopSection = document.getElementById("shop");

function productShop() {

    shopSection.innerHTML = "";

    for (let index = 0; index < products.length; index++) {
        shopSection.appendChild(render(products[index]));
    }
}


//Create items
function render(products) {

    //create div
    let item = document.createElement("div");
    item.className = "shop__item";

    //create the image
    let image = document.createElement("img");
    image.className = "shop__img";
    image.src = products.image;

    //create the product name
    let name = document.createElement("h3");
    name.className = "shop__product";
    name.innerHTML = products.name;

    let price = document.createElement("h4");
    price.className = "shop__price"
    price.innerHTML = "$ " + products.price;

    item.appendChild(image);
    item.appendChild(name);
    item.appendChild(price);

    return item;
}


productShop();