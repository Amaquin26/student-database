import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [students,setStudents] = useState([])
    const [data,setData] = useState([])
    const [search,setSearch] = useState("")

    useEffect(() => {
        setStudents(data)
    }, [data])

    return (
        <DataContext.Provider
            value={{
                students,setData,search,setSearch
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext