import { valida } from "./validaciones-registro-usuarios.js";
import { clientServices } from "../services/client-services.js";

const inputs = document.querySelectorAll("input");

const registroSubmit = document.querySelector("[data-form-alta]");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

registroSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const usuario = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    password: formData.get("password"),
    nacimiento: formData.get("nacimiento"),
    telefono: formData.get("telefono"),
    direccion: formData.get("direccion"),
    ciudad: formData.get("ciudad"),
    provincia: formData.get("provincia"),
  };
  clientServices.crearUsuario(usuario);
});
