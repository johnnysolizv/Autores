import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AutorForm from '../components/AutorForm';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const { id } = props;
    const [autor, setAutor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/autores/' + id)
            .then(res => {
                setAutor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAutor = autor => {
        axios.put('http://localhost:8000/api/autores/' + id, autor)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update Autor</h1>
            {loaded && (
                <>
                    <AutorForm
                        onSubmitProp={updateAutor}
                        initialNombre={autor.nombre}
                    />
                    <DeleteButton autorId={autor._id} successCallback={() => navigate("/autores")} />
                </>
            )}
        </div>
    )
}