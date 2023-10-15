import React from 'react'

const FindByButtons = ({label, activeButton,setActiveButton}) => {
    const isActive = () => {
        if (activeButton === label)
            return {color:"black", background:"white"}

        return null
    }

    return (
        <button 
            className="function-buttons"
            onClick={() => setActiveButton(label)}
            style={isActive()}
        >
            {label}
        </button>
    )
}

export default FindByButtons