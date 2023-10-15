import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'

const DeleteModal = ({idno, setOpenModal}) => {
  const {setData,students} = useContext(DataContext)

  const deleteStudent = async() => {
    try{
        const response = await axios.delete(`http://127.0.0.1:8001/delete/${idno}`)

        
        if(response.data[0]){
            const newStudents = students.filter((s) => s.idno !== idno)
            setData(newStudents)
        }

        console.log(response.data)
    }catch(err){
        console.log(err)
    }finally{
      setOpenModal(false)
    }
}

  return (
    <div 
      className='fixed z-50 bg-black/50 top-0 bottom-0 right-0 left-0 flex justify-center items-center'
      onClick={() =>  setOpenModal(false)}
    >
        <div 
          className='w-[50%] m-auto bg-white rounded-lg py-5 px-10'
          onClick={(e) => e.stopPropagation()}
        >
            <h1 
              className='font-medium text-3xl text-slate-900'
            >
                Delete Student {idno}
              </h1>
              <p className='text-xl mt-2'>Do you wish to delete this student ?</p>
              <div className='w-full flex justify-end my-3 gap-x-3'>
                <button 
                    className='bg-red-500 interact-button'
                    onClick={deleteStudent}
                >
                  Delete
                </button>
                <button 
                    className='border-[1px] border-slate-900 interact-button text-black'
                    onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>   
              </div>
              <p className='text-red-500 mt-5'>Warning: This will delete the student permanently.</p>
        </div>
    </div>
  )
}

export default DeleteModal