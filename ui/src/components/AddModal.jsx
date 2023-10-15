import { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import axios from 'axios'
import { toast } from 'react-toastify';

const AddModal = ({setOpenAddModal}) => {
    const {setData} = useContext(DataContext)

    const [idno,setidno] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [course,setCourse] = useState("")
    const [level,setLevel] = useState("")

    const handleAdd = async () => {
        try{
            const response = await axios.post(`http://127.0.0.1:8001/add`,{
                idno,lastname,firstname,course,level
            })

            if(response.data.error){
                toast.error(`${response.data.error}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                return
            }

            if(response.data[0]){
                const stud = await axios.get('http://127.0.0.1:8001/getall')
                setData(stud.data)
            }

            toast.success('Student Added', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });


        }catch(err){
            toast.error(`${err.message}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }finally{
            setOpenAddModal(false)
        }
    }

    return (
        <div 
        className='fixed z-50 bg-black/50 top-0 bottom-0 right-0 left-0 flex justify-center items-center'
        onClick={() =>  setOpenAddModal(false)}
        >
            <div 
            className='w-[50%] m-auto bg-white rounded-lg py-5 px-10'
            onClick={(e) => e.stopPropagation()}
            >            
                <h1 
                className='font-medium text-3xl text-slate-900'
                >
                    Add Student
                </h1>

                <div 
                    className='my-5 flex flex-col w-[50%] m-auto'
                >
                    <label 
                        htmlFor="setidno"
                        className='my-1'
                    >
                        IDNO:
                    </label>
                    <input type="text" placeholder='setidno' id='setidno'
                        className='form-input'
                        onChange={(e) => setidno(e.target.value)}
                        value={idno}
                    />

                    <label 
                        htmlFor="lastname"
                        className='my-1'
                    >
                        Last Name:
                    </label>
                    <input type="text" placeholder='lastname' id='lastname'
                        className='form-input'
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                    />

                    <label 
                        htmlFor="firstname"
                        className='my-1'
                    >
                        First Name:
                    </label>
                    <input type="text" placeholder='firstname' id='firstname'
                        className='form-input'
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                    />

                    <label 
                        htmlFor="course"
                        className='my-1'
                    >
                        Course:
                    </label>
                    <input type="text" placeholder='course' id='course'
                        className='form-input'
                        onChange={(e) => setCourse(e.target.value)}
                        value={course}
                    />

                    <label 
                        htmlFor="level"
                        className='my-1'
                    >
                        Level:
                    </label>
                    <input type="text" placeholder='level' id='level'
                        className='form-input'
                        onChange={(e) => setLevel(e.target.value)}
                        value={level}
                    />
                </div>

                <div className='w-full flex justify-end my-3 gap-x-3'>
                    <button 
                        className='bg-slate-900 interact-button'
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                    <button 
                        className='border-[1px] border-slate-900 interact-button text-black'
                        onClick={() => setOpenAddModal(false)}
                    >
                        Cancel
                    </button>   
                </div>
            </div>
        </div>
    )
}

export default AddModal