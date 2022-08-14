const listaUsuarios = () =>
  fetch("http://localhost:3000/usuario").then((response) => response.json());

const crearUsuario = (name, phone, address, email, password) => {
  return fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      address,
      email,
      password,
      id: uuid.v4(),
    }),
  });
};

const detalleUsuario = async (id) => {
  const response = await fetch(`http://localhost:3000/usuario/${id}`);
  return await response.json();
};

const actualizarUsuario = async (id, name, phone, address, email, password) => {
  try {
    const response = await fetch(`http://localhost:3000/usuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        email,
        password,
      }),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

const eliminarUsuario = (id) => {
  return fetch(`http://localhost:3000/usuario/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  listaUsuarios,
  crearUsuario,
  detalleUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
