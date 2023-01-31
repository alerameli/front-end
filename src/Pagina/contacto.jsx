import React, { useState, useEffect } from "react";
import axios from "axios";

function contacto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://alerameli-cv-api.adaptable.app")
      .then((res) => {
        setData(res.data.media);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container ">
      <div className="seccion contacto" id="contact">
        <div className="contenido ">
          <h3 id="contact" className="titulo-seccion">Contact me</h3>
          <div className="container-skills">
            <p>Let´s talk and get a coffee :)</p>
            <div className="row " >
              {data.map((media, index) => (
                <div className="col-6 col-lg-3" key={index}>
                  <a href={media.url} target="_blank" rel="noopener noreferrer">
                    <img src={media.image} width="20%" className="contact-image" alt={media.name+" image"}/>
                  </a>
                  <p>{media.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
export default contacto;
