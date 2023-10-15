import React from 'react'

const AddButton = ({setOpenAddModal}) => {
  return (
    <div className='fixed bottom-20 right-20 text-slate-900 rounded-full border-2 border-slate-900 w-[75px] h-[75px] text-4xl flex justify-center items-center'>
        <button
            onClick={() => setOpenAddModal(true)}
        >
            +
        </button>
    </div>
  )
}

export default AddButton