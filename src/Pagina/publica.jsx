import Menu from "./menu";
import Presentacion from "./introduccion";
import Hablilidades from "./habilidades";
import Empleo from "./empleo";
import Educacion from "./educacion";
import Cursos from "./cursos";
import Proyectos from "./proyectos";
import Contacto from "./contacto";
import React from 'react';

function publica() {
  return (
    <div className="principal">
      <Menu />
      
        <Presentacion />
      

      <div className="container columnas">
        <div className="row ">
          <div className="col-lg-6 col-md-12 ">
            <Hablilidades />
          </div>
          <div className="col-lg-6 col-md-12 ">
            <Educacion />
          </div>
        </div>
      </div>
      <Empleo />
      <Proyectos />
      <Cursos />
      <Contacto />
    </div>
  );
}
export default publica;
