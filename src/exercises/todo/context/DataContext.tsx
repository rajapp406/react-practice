import React, { createContext, useState } from "react";

export const DataContext = createContext({} as any);

export function ContextProvider({ children }) {
    const [selectedList, setSelectedList] = useState([] as any);
    const onSelectedList = (id) => {
        console.log(selectedList, 'ids');
        setSelectedList((prev: string[]) => {
            const idList = prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id];
            return idList;
        });
    }
    return (
        <DataContext.Provider value={{ selectedList, onSelectedList, setSelectedList }}>
            {children}
        </DataContext.Provider>
    )

}