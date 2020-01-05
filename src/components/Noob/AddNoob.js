import React, { useState, useContext, useEffect } from 'react';
import uuid from 'uuid/v4'
import NoobContext from '../../contexts/Noob/noobContext';
import { UPDATE_NOOB } from '../../contexts/types';

const AddNoob = (props) => {
    const noobContext = useContext(NoobContext)
    const { noobs, addNoob, current, setCurrent, updateNoob } = noobContext;
    useEffect(() => {
        if(current !== null) {
            setNoob(current)
        }
    },[current])

    const [noob, setNoob] = useState({
        name: '',
        age: '',
        id: uuid()
    })

    const handleSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addNoob(noob)
        } else {
            updateNoob(noob)
        }
        
        setNoob({
            name: '',
            age: '',
            id: ''
        })
        
    }  

    const handleChange = e => {
        setNoob({...noob, [e.target.name]: e.target.value})
    }

    return ( 
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" onChange={ handleChange } 
                    placeholder="Enter Name"
                    name="name"
                    value={noob.name}/>
                <input type="text" onChange={ handleChange }
                    placeholder="Enter Age" name="age"
                    value={ noob.age }/>
                <input type="submit" className="btn"/>
            </form>
        </div>
     );
}
 
export default AddNoob;