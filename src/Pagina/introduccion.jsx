import React, { useEffect, useState } from "react";
import axios from "axios";

function introduccion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://alerameli-cv-api.adaptable.app")
      .then((res) => {
        setData(res.data.contact);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="container">
      {data.map((contact, index) => (
        <div className="seccion" key={index}>
          <div className="container-skills">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-9 vertical-align">
                  <div>
                    <h3>Hi, I am {contact.name}</h3>
                    <h4>am I am a software developer</h4>
                    <p>{contact.description}</p>
                  </div>
                </div>
                <div className="col-12 col-lg-3 vertical-align profile-container">
                  <img src="images/perfil.png" width="100%" className="profile" alt="profile"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}
export default introduccion;
