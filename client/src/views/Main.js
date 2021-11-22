import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AutorForm from '../components/AutorForm';
import AutorList from '../components/AutorList';

export default () => {
    const [autores, setAutores] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/autores')
            .then(res =>{ 
                setAutores(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = autorId => {
        setAutores(autores.filter(autor => autor._id != autorId));
    }
    const createAutor = autor => {
        axios.post('http://localhost:8000/api/autores', autor)
            .then(res=>{
                setAutores([...autores, res.data]);
            })
    }
    return (
        <div>
           <AutorForm onSubmitProp={createAutor} initialNombre=""/>
           <hr/>
           {loaded && <AutorList autores={autores} removeFromDom={removeFromDom}/>}
        </div>
    )
}