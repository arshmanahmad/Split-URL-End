import React, { useState } from 'react'
import "../App.css";
import Context from './context/Context';
import { useContext } from 'react';

const Table = () => {
    const [splitLink, setSplitLink] = useState('');

    const { links } = useContext(Context);

    const handleShowSplit = () => {

        const updatedArray = links.map((link) => {
            const splitted = link.link.split('/');
            const lastChar = splitted[splitted.length - 1];
            return <p>{lastChar}</p>;
        })
        setSplitLink(updatedArray);

    }
    console.log(splitLink)


    return (
        <>
            <div className='main-container'>
                <div>
                    <button onClick={handleShowSplit}>Split end</button>
                    {links.map((link) => {
                        return <li>{link.link}</li>
                    })}
                    {splitLink}
                </div>
            </div>
        </>
    )
}

export default Table