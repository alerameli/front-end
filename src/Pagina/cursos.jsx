import React, { useState, useEffect } from 'react';
import axios from "axios";
function cursos() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/")
            .then(res => {
                setData(res.data.courses)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container ">
            <div className='seccion' id="courses">
                <div>
                    <h3 className='titulo-seccion'>Courses</h3>
                    <div className="row">
                        {data.map((course, index) => (
                            <div className='col-12 col-lg-6 columnas'>
                                <div class="cards" key={index}>
                                    <img src={course.image} alt="course" width="100%" />
                                    <div class="con">
                                        <h4><b>{course.name}</b></h4>
                                        <p>Topics: {course.techs}</p>
                                        <a href={course.url} target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-secondary">
                                                Certifiacte
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
}
export default cursos;
