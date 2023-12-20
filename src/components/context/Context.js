import React, { useState } from 'react';
import { createContext } from 'react';

const Context = createContext();

function Provider({ children }) {

    const [links, setLinks] = useState([
        { link: "https://meet.google.com/awt" },
        { link: "https://chat.openai.com/c/a4448804-3605-4176-88bf-d1a00a71fc2f" },
        { link: "https://github.com/Shuja123dev/keyboard-tester" },
    ]);

    return (
        <Context.Provider value={{ links }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export { Provider };