import React, { useState } from 'react'
import Context from './ContextState'

const ContextProvider = (props) => {
    const [BookMarkDate, setBookMarkDate] = useState([]);
    const handleOnBookmark = (data) => {
        BookMarkDate.push(data);
    }
    return (
        <Context.Provider value={{ BookMarkDate, setBookMarkDate, handleOnBookmark }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
