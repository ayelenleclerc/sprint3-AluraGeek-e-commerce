const listaProductos = () =>
  fetch("http://localhost:3000/producto").then((response) => response.json());

const crearProducto = (img, category, name, price, description) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img,
      category,
      name,
      price,
      description,
      id: uuid.v4(),
    }),
  });
};

const detalleProducto = async (id) => {
  const response = await fetch(`http://localhost:3000/producto/${id}`);
  return await response.json();
};

const actualizarProducto = async (
  id,
  img,
  category,
  name,
  price,
  description
) => {
  try {
    const response = await fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        category,
        name,
        price,
        description,
      }),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

export const productServices = {
  listaProductos,
  crearProducto,
  detalleProducto,
  actualizarProducto,
  eliminarProducto,
};
