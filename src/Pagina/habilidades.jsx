import React, { useEffect, useState } from 'react';
import axios from "axios";
function habilidades() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/")
            .then(res => {
                setData(res.data.skills)
            })
            .catch(error => console.log(error));
    }, []);

    const firstHalf = data.slice(0, data.length / 2);
    const secondHalf = data.slice(data.length / 2, data.length);

    return (
        <div className='seccion' id="skills">
            <div className='contenido'>
                <h3 className='titulo-seccion'>Some skills</h3>
                <div className="container container-skills">
                    <div className="row align-items-start">
                        {firstHalf.map((skill, index) => (
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3 " key={index}>
                                <img src={skill.image} width="100%" className='profile' alt={skill.name+" logo"}/>
                                <p className='textoCentrado'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-start">
                        {secondHalf.map((skill, index) => (
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3 " key={index}>
                                <img src={skill.image} width="100%" className='profile' alt={skill.name+" logo"}/>
                                <p className='textoCentrado'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default habilidades;
