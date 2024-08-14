import './Protfolio.css'
import ProtfoFull from '../components/Protfo_Full'
import ProtfoGame from '../components/Protfo_Game'
import React, { useState } from 'react'

const Protfolio = () => {
    const [selectedSection, setSelectedSection] = useState('full');

    const handleButtonClick = (section) => {
        setSelectedSection(section);
    };


    return (
        <div className="Protfolio">
            <div className="title">
                Protfolio
            </div>
            <div className='protfolio-section'>
                <button className='protfo-btn' onClick={() => handleButtonClick('full')}>
                    <div className='button-text'>
                        Full Stack
                    </div>
                </button>
                <button className='protfo-btn' onClick={() => handleButtonClick('game')}>
                    <div className='button-text'>
                        Games
                    </div>
                </button>
            </div>
            {selectedSection === 'full' && <ProtfoFull />}
            {/* {selectedSection === 'Backend' && <div>Backend Component Here</div>}
            {selectedSection === 'Frontend' && <div>Frontend Component Here</div>} */}
            {selectedSection === 'game' && <ProtfoGame />}
        </div>
    )
}

export default Protfolio