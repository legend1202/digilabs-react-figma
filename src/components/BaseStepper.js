import React from 'react'

import styled from 'styled-components';

export default function BaseStepper({checked, number, note, Svg, ...props}) {
    const SvgIcon = styled.img`
      src: ${({ theme }) => (theme === "lightTheme") ? Svg:""};
    `;
  return (
    <div className= { checked ?  "baseStepper active" : "baseStepper " }>
      <div className='stepNumber'>
        { checked ? (note === 'Account') ? Svg : (<input type='checkbox' checked="checked" onChange={()=>{}} />) : number}
      </div>
      <div className='stepLetter'>
        {note}
      </div>
    </div>
  )
}
// baseStepper ${checked && "active"}