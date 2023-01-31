import React, { useState, useEffect } from "react";
import axios from "axios";
function proyectos() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://alerameli-cv-api.adaptable.app")
            .then((res) => {
                setData(res.data.projects);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container ">
            <div className="seccion" id="projects">
                <div>
                    <h3 className="titulo-seccion">Projects</h3>
                    <div className="row">
                        {data.map((project, index) => (
                            <div className="col-12 col-lg-4 col-md-6 columnas" key={index}>
                                <div className="carta-proyectos">
                                    <div className="carta-proyectos-titulo">
                                        <h5>{project.name}</h5>
                                    </div>

                                    <div className="carta-proyectos-contenido">
                                        <p>{project.description}</p>
                                        <h6>Techs used</h6>
                                        <div className="gallery">
                                            {project.techs.map((tech, index) => (
                                                <img
                                                    className="card-image"
                                                    src={tech.url}
                                                    key={index}
                                                    alt={tech.name}
                                                    width="15%"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="btn btn-secondary">
                                            Repository
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default proyectos;
