import { productServices } from "../services/products-services.js";

const starwars = document.querySelector("[data-section-starwars]");
const consolas = document.querySelector("[data-section-consolas]");
const diversos = document.querySelector("[data-section-diversos]");

let productosStarWars;
let productosConsolas;
let productosDiversos;

const contenedor = [starwars, consolas, diversos];
const productos = [
  (productosStarWars = []),
  (productosConsolas = []),
  (productosDiversos = []),
];

productServices.listaProductos().then((data) => {
  data.forEach((producto) => {
    if (producto.categoria === "Star Wars") {
      productosStarWars.push(producto);
      renderizarProductos(productosStarWars, starwars);
      console.log("la cantidad a mostrar es:" + productosStarWars.length);
    } else if (producto.categoria === "Consolas") {
      productosConsolas.push(producto);
      renderizarProductos(productosConsolas, consolas);
    } else if (producto.categoria === "Diversos") {
      productosDiversos.push(producto);
      renderizarProductos(productosDiversos, diversos);
    }
  });
});
console.log(productos);

const renderizarProductos = (productos, contenedor) => {
  productos.forEach((producto) => {
    const card = nuevaCard(producto);
    contenedor.appendChild(card);
  });
};

const nuevaCard = (producto) => {
  const card = document.createElement("div");
  card.classList.add("card__item");
  card.innerHTML = `
  <figure>
    <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
    <figcaption class="card__figcaption">${producto.nombre}</figcaption>
    </figure>
    <p class="card__p"> ${producto.precio}</p>
      <a href="#detalle" class="card__a">Ver más</a>
    </div>
  `;
  return card;
};
