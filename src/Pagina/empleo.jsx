import React, { useEffect, useState } from 'react';
import axios from "axios";
function empleos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/")
      .then(res => {
        setData(res.data.jobs);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className='seccion' id='jobs'>
        <div >
          
            <h3 className='titulo-seccion'>Jobs</h3>
          

          {data.map((job, index) => (
            <div className='carta'>
              <div key={index} className="row">
                <div className="col-3 vertical-align">
                  <img src={job.image} width="100%" alt={"logo "+job.company}/>
                </div>
                <div className="col-9 vertical-align">
                  <div>
                    <h4>{job.company}</h4>
                    <p>({job.lapse} ) <i>{job.charge}</i></p>
                    <p>{job.description}</p>
                  </div>
                </div>
              </div>

            </div>

          ))}
        </div>
      </div>

    </div>

  );
}
export default empleos;
