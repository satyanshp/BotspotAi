import React from 'react'
import './button.css'
// import PropTypes from 'prop-types'

const Button = ({text,colr,bdr,w,d}) => {
    return (
            
                <button  className='btn'
            style={{color : colr, border:bdr, width:w }}>
                  <span>{text} </span>
                 
                 <img style={{display: d}} src="./img/arrow.svg" alt="" />
            </button>
            
            
            
            
    )
}

Button.defaultProps={
    w : '190px',
    d : 'none' 
}

export default Button
