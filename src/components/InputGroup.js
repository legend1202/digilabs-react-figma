import React from 'react'
import iconInfo from './svg/infoIcon.png'

const InputGroup = ({width, title, placeholder, smallLabel}) => {
  return (
    <div className='input-group wrapper'>
        <label>{ title }</label>
        <input type='text' className={(width === 'half') ? 'width-half' : 'inputWidth'}  placeholder= {placeholder} />
        <div className='icon icon-info'>
            <img src={iconInfo} className='icon' alt="logo" />
        </div>
        <label className={smallLabel || "small-input"}>{smallLabel}</label>
    </div>
  )
}

export default InputGroup