import axios from 'axios'
import { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import DeleteModal from './DeleteModal'
import UpdateModal from './UpdateModal'

const StudentCard = ({student}) => {
    const [openDeleteModal,setDeleteOpenModal] = useState(false)
    const [openUpdateModal,setUpdateOpenModal] = useState(false)

    return (
        <div className='border-2 border-slate-900 rounded-md p-3 text-lg w-[400px] h-[200px] flex items-center'>
            {openDeleteModal && !openUpdateModal && (
                <DeleteModal 
                    idno={student.idno}
                    setOpenModal={setDeleteOpenModal}
                />
            )}

            {openUpdateModal && !openDeleteModal && (
                <UpdateModal 
                    student={student}
                    setUpdateOpenModal={setUpdateOpenModal}
                />
            )}
            
            <div className='w-full'>
                <h1 className='font-bold'>Name: {student.lastname}, {student.firstname}</h1>
                <p>IDNO: {student.idno}</p>
                <p>Course: {student.course}</p>
                <p>Level: {student.level}</p>
                <div className='mt-5 flex gap-x-4 justify-end'>
                    <button 
                        className='bg-green-700 interact-button'
                        onClick={() => {
                            setUpdateOpenModal(true)
                            setDeleteOpenModal(false)
                        }}
                    >
                        Update
                    </button>
                    <button 
                        className='bg-red-500 interact-button'
                        onClick={() => {
                            setDeleteOpenModal(true)
                            setUpdateOpenModal(false)
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>   
        </div>
    )
}

export default StudentCard