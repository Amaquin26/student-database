import { useContext, useEffect, useState } from "react"
import Banner from "../components/Banner"
import StudentCard from "../components/StudentCard"
import DataContext from "../context/DataContext"
import axios from 'axios'
import AddButton from "../components/AddButton"
import AddModal from "../components/AddModal"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const {students, setData} = useContext(DataContext)
    const [openAddModal,setOpenAddModal] = useState(false)

    useEffect(() => {

        const getStudents = async () => {
          try{
            const response = await axios.get('http://127.0.0.1:8001/getall')
    
            setData(response.data)
          }catch(err){
            console.log(err)
          }
        }
    
        getStudents()
    }, [])

    return (
        <>
            <Banner />

            <div className="mt-5 p-3 flex flex-wrap gap-3 md:px-10 px-5 justify-around items-center w-[80%] m-auto">
            {students.map((s) => (
                <StudentCard
                key={s.id}
                student={s}
                />
            ))}
            </div>

            {openAddModal && (
                <AddModal 
                    setOpenAddModal={setOpenAddModal}
                />
            )}

            <AddButton 
                setOpenAddModal={setOpenAddModal}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Home