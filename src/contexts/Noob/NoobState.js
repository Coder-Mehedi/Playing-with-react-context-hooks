import React, { useReducer } from 'react';
import NoobContext from './noobContext'
import noobReducer from './noobReducer'

import { ADD_NOOB, SET_CURRENT, UPDATE_NOOB } from '../types'

const NoobContextProvider = props => {
    const initialState = {
        noobs: [
            {name: 'Mehedi', age: 22, id: 1},
            {name: 'Rakib', age: 21, id: 2},
            {name: 'Sabuj', age: 24, id: 3}
        ],
        current: null
    }

    const [noobs, dispatch] = useReducer(noobReducer, initialState)

    

    const addNoob = noob => {
        dispatch({ type: ADD_NOOB, payload: noob })
    }

    const setCurrent = noob => {
        dispatch({type: SET_CURRENT, payload: noob})
    }

    const updateNoob = noob => {
        dispatch({type: UPDATE_NOOB, payload: noob})
    }

    return(
        <NoobContext.Provider value={{ noobs, addNoob, setCurrent, current: noobs.current, updateNoob }}>
            { props.children }
        </NoobContext.Provider>
    )
}

export default NoobContextProvider