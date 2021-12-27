import React from 'react'
import './started.css'
import Button from './Button'
const Started = () => {
    return (
        <div className='started'>
           
                <div className='txt'>
                    Why Choose BOTSPOT AI?
                    We’re so glad you 
                    asked !
                </div>
                <div className='buttn'>
                    <div>
                        <Button d="" w="220px" bdr='3px solid #000000' colr='blake' text= "GET STARTED TODAY" />
                    </div>
                    <div>
                        <Button d="" text="OUR SERVICES"  bdr='3px solid #000000' colr='blake'/>
                        
                    </div>
                </div>
            
            
        </div>
    )
}

export default Started
