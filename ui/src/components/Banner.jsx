import React, { useContext, useEffect, useState } from 'react'
import FindByButtons from './FindByButtons'
import DataContext from '../context/DataContext'
import axios from 'axios'

const findby = ['idno','last name','first name','course','level']

const Banner = () => {
    const {search,setSearch,setData} = useContext(DataContext)
    const [activeButton,setActiveButton] = useState("idno")

    const findStudent = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post("http://127.0.0.1:8001/getrecord",{[activeButton]:search})
            setData(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        const getAll = async() => {
            if(search !== "")
                return
            
            try{
                const response = await axios.get('http://127.0.0.1:8001/getall')
                setData(response.data)   
              }catch(err){
                console.log(err)
              }
        }

        getAll()
    }, [search])

    return (
        <div className='bg-slate-50 sticky top-0 w-full md:px-32 px-10 p-5 shadow-sm'>
            <div className="w-full bg-slate-900 rounded-2xl p-5">
                <h1 className="text-slate-200 text-5xl font-medium text-center">
                Student Database
                </h1>
                <div className="mt-5 xl:w-[70%] w-full m-auto">
                    <div className='w-full flex my-3'>
                        <input 
                            type="text" 
                            placeholder='Search using a keyword'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='flex-1 rounded-lg px-3 py-2 font-medium'
                        />
                        <button 
                            className="function-buttons ml-3"
                            onClick={findStudent}
                        >
                            Find Student
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-slate-200/75 text-lg mr-4'>Find By:</p>
                        <div className='flex gap-x-2'>
                            {findby.map((e) => (
                                <FindByButtons 
                                    key={e}
                                    label={e}
                                    setActiveButton={setActiveButton}
                                    activeButton={activeButton}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner