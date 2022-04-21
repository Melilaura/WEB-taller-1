const form = document.getElementById("add_form");

const productName = document.getElementById("name__product");
const productDescription = document.getElementById("description__product");
const productStock = document.getElementById("stock__product");
const productPrice = document.getElementById("price__product");
const productCategory = document.getElementById("category__product");

const addButton = document.getElementById("add__button");

addButton.addEventListener("click", e => {

    e.preventDefault();
    //console.log(productName.value);

    if (productName.value === '' || productDescription.value === '' || productStock.value === '' || productPrice.value === '' || productCategory.value === '') {
        alert("Por favor llene todos los campos");
    } else {
        const product = {
            product: productName.value,
            description: productDescription.value,
            stock: productStock.value,
            price: productPrice.value,
            category: productCategory.value,
        }

        console.log(product)
    }

});