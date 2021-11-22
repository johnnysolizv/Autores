import React from 'react'
import axios from 'axios';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    const { autorId, successCallback } = props;
    const deleteAutor = e => {
        axios.delete('http://localhost:8000/api/autores/' + autorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <Button color="danger" onClick={deleteAutor}>
            Delete
        </Button>
    )
}