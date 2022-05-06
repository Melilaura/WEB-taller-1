import { storage, db } from "./app";
import { addProduct, uploadImages } from "./functions/addProduct";

const createProductForm = document.getElementById('productForm');

createProductForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Create a new product");

    const name = createProductForm.nombreProducto.value;
    const description = createProductForm.descripcion.value;
    const price = createProductForm.precio.value;
    const category = createProductForm.categoria.value;
    const images = createProductForm.images.files;

    let gallery = [];

    if (images.length) {
        // Vamos a subir las imagenes a firestore
        const uploadedImages = await uploadImages(storage, [...images]);

        gallery = await Promise.all(uploadedImages);
    }

    const newProduct = {
        name,
        description,
        price,
        category,
        images: gallery,
    };

    await addProduct(db, newProduct);
});