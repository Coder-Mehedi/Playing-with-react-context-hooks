import React, { useContext } from 'react';
import NoobContext from '../../contexts/Noob/noobContext'
import NoobDetails from './NoobDetails'
import AddNoob from './AddNoob';

const Noobs = () => {
    const noobContext = useContext(NoobContext)
    const { noobs } = noobContext

    
    const noobList = noobs.noobs.length && noobs.noobs.map(noob => (
        <NoobDetails name={ noob.name } age={ noob.age } key={ noob.id } noob={noob} />
    ))
    return ( 
        <div className="row">
            <div className="col m6 offset-m3">
                <h2>Noob Lists</h2>
                <ul className="collection">
                    {noobList}
                </ul>
                <AddNoob />
            </div>
        </div>
     );
}
 
export default Noobs;