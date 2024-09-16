import axios from "axios";
import { useState } from "react";

function AgregarMarca() {
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
    // Prevenir que se procese el `submit` por defecto del formulario para evitar recargar la página.
    e.preventDefault();

    // Declarar la URL a donde se realizará la petición HTTP.
    const urlBase = "http://localhost:8080/PA/marca";

    // Utilizar Axios para realizar una petición POST a la URL declarada, enviando la información de la marca.
    await axios.post(urlBase, marca);

    // Forma alternativa de hacer request con axios.
    /**
    await axios({
      method: "POST",
      url: urlBase,
      data: marca,
    });
     */
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Formulario Agregar Marca</h3>
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

export default AgregarMarca;
