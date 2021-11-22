import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { List, Row, Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const [autores, setAutores] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/autores')
            .then(res => setAutores(res.data));
    }, [])
    const removeFromDom = autorId => {
        setAutores(autores.filter(autor => autor._id != autorId))
    }
    return (
       <Row>
           <Table striped>
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Acciones disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor, idx) => <tr key={idx}>
                        <td>
                    <Link to={"/autores/" + autor._id} >
                        {autor.nombre}
                    </Link>
                   </td>
                     <td>
                     <Link to={"/autores/" + autor._id + "/edit"} className='link'>
                        <Button >Edit</Button>
                    </Link> 
                    
                    <DeleteButton autorId={autor._id} successCallback={()=>removeFromDom(autor._id)}/>
                    </td>
                    </tr>)}
                </tbody>

           </Table>
       </Row>
    )
}








{/* <div>
{autores.map((autor, idx) => {
    return (
        <p key={idx}>
            <Link to={"/autores/" + autor._id}>
                {autor.nombre}
            </Link>
            |
            <Link to={"/autores/" + autor._id + "/edit"}>
                Edit
            </Link> 
            |
           <DeleteButton autorId={autor._id} successCallback={()=>removeFromDom(autor._id)}/>
        </p>
    )
})}
</div> */}