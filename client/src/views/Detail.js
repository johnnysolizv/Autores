import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
  const [autor, setAutor] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/autores/" + props.id).then((res) =>
      setAutor({
        ...res.data,
      })
    );
  }, []);
  return (
    
      <div>
        <p>Nombre : {autor.nombre}</p>
    
  
        <Link to={"/autores/" + autor._id + "/edit"}>
          <Button>Editar</Button>
        </Link>
      </div>
   
  );
};
