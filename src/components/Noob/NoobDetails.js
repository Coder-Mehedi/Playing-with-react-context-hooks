import React, { useContext } from 'react';
import NoobContext from '../../contexts/Noob/noobContext';

const NoobDetails = ({ name, age, noob }) => {
    const noobContext = useContext(NoobContext)

    const { noobs, setCurrent } = noobContext

    const handleClick = e => {
        console.log('clicked')
        setCurrent(noob)
    }

    return <li className="collection-item" onClick={handleClick}>{ name }  -  { age }</li>
}
 
export default NoobDetails;