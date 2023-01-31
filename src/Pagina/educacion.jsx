import axios from "axios";
import React, { useEffect, useState } from 'react';

function educacion() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/")
            .then(res => {
                setData(res.data.schools);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="seccion" id="education">
            <div>
                    <h3 className="titulo-seccion">Education</h3>
                {data.map((school, index) => (
                    <div className="carta" key={index}>
                        <div className="row" >
                            <div className="col-3">
                                <img src={school.image} width="100%" alt="logo escuela" />
                            </div>
                            <div className="col-9 vertical-align">
                                <div>
                                    <h5>{school.name} ({school.lapse})</h5>
                                    <p>{school.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
export default educacion;
