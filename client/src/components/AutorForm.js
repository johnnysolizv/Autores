import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';

export default props => {
    const { initialNombre, onSubmitProp } = props;
    const [nombre, setNombre] = useState(initialNombre);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({nombre});
    }
        
    return (
        <Form onSubmit={onSubmitHandler}>
            <p>
                <label>Nombre</label><br />
                <input 
                    type="text" 
                    name="nombre" value={nombre} 
                    required minLength={3}
                    onChange={(e) => { setNombre(e.target.value) }} />
            </p>
          
            <Button color="success" >   Submit  </Button>
        </Form>
    )
}