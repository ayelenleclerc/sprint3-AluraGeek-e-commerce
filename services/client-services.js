const listaUsuarios = () =>
  fetch("http://localhost:3000/usuario").then((response) => response.json());

const crearUsuario = (nombre, telefono, direccion, email, password) => {
  return fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      telefono,
      direccion,
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

const actualizarUsuario = async (
  id,
  nombre,
  telefono,
  direccion,
  email,
  password
) => {
  try {
    const response = await fetch(`http://localhost:3000/usuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        telefono,
        direccion,
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
