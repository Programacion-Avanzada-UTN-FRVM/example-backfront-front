import axios from "axios";
import { useState } from "react";

function AgregarMarca2() {
  const [marca, setMarca] = useState({
    denominacion: "",
    observacion: "",
  });

  const { denominacion, observacion } = marca;

  /** Handler para gestionar el cambio de los inputs. */
  const onInputChange = (e) => {
    // Spread operator ... (expandir los atributos)
    setMarca({ ...marca, [e.target.name]: e.target.value });
  };

  /** Handler para gestionar la subida del formulario/confirmación de agregar. */
  const onSubmit = async (e) => {
    /**
     * try/catch
     *
     * El bloque `try` permite ejecutar un bloque de código y capturar errores que puedan ocurrir.
     *
     * El bloque `catch` permite capturar errores que ocurran en el bloque `try` y manejarlos.
     * Si ocurre un error en el bloque `try`, se ejecutará el bloque `catch`.
     *
     * Esto permite organizar un manejo de excepciones en varios scopes o niveles de ejecución, principalmente
     * peticiones hacia el backend u otras APIs externas que pueden devolver codigos 4xx o 5xx que para Web Assembly
     * sonarán como errores.
     */
    try {
      e.preventDefault();

      // Declarar la URL a donde se realizará la petición HTTP.
      const urlBase = "http://localhost:8080/PA/marca";

      // Utilizar Axios para realizar una petición POST a la URL declarada, enviando la información de la marca.
      await axios.post(urlBase, marca);
    } catch (error) {
      alert("Error al guardar marca", error);
      console.error("Error al obtener marcas", error);
    }
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Formulario Agregar Marca 2</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="denominación" className="form-label">
            Denominación
          </label>
          <input
            type="text"
            className="form-control"
            id="denominacion"
            name="denominacion"
            value={denominacion}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="observación" className="form-label">
            Obsevacion
          </label>
          <input
            type="text"
            className="form-control"
            id="observacion"
            name="observacion"
            value={observacion}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">
            Agregar
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            Regresar
          </a>
        </div>
      </form>
    </div>
  );
}

export default AgregarMarca2;
